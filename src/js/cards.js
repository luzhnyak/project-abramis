import { BookshelfApiService } from './api-service';
import { markupBook } from './modal-book';
import Notiflix from 'notiflix';

const cardsEl = document.querySelector('.js-cards');

const booksApi = new BookshelfApiService();

// Рендер категорій по 5 книг
export async function bestBooksAllCategories() {
  Notiflix.Loading.standard();

  try {
    const topBooksData = await booksApi.fetchTopBooks();

    const cardsHtml = topBooksData
      .map(el => {
        return `<div>
        <h2 class='category-name'>${el.list_name}</h2>
        <div class='category-books-container'>${bestBooks(el.books)}</div>
        <div class='see-more-btn-container'><button class='see-more-btn' type="button" data-catname="${
          el.list_name
        }">See more</button></div>
      </div>`;
      })
      .join('');

    cardsEl.innerHTML = `<h1 class="general-title">Best Sellers<span class="violet"> Books</span></h1>
         ${cardsHtml}`;

    const allCardsEl = document.querySelectorAll('.js-card-click');
    const allSeeMoreEl = document.querySelectorAll('.see-more-btn');

    allCardsEl.forEach(el => {
      el.addEventListener('click', event => {
        markupBook(event.currentTarget.dataset.id);
      });
    });

    allSeeMoreEl.forEach(el => {
      el.addEventListener('click', event => {
        booksCategory(event.target.dataset.catname);

        const catsBtnActive = document.querySelector('.categorie-btn.active');
        catsBtnActive.classList.remove('active');

        const catsBtn = document.querySelectorAll('.categorie-btn');

        catsBtn.forEach(el => {
          if (el.dataset.list_name === event.target.dataset.catname) {
            el.classList.add('active');
          }
        });
      });
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }

  Notiflix.Loading.remove();
}

// Рендер всіх книг однієї категорії
export async function booksCategory(catName) {
  Notiflix.Loading.standard();
  try {
    const books = await booksApi.fetchBooksByCategory(catName);
    if (catName === 'All categories') {
      bestBooksAllCategories();
      return;
    }

    if (books.length === 0) {
      Notiflix.Notify.failure('No books found in this category');
    }
    const booksHtml = books
      .map(el => {
        return cardBook(el, 0);
      })
      .join('');

    const catNameWords = catName.trim().split(' ');

    cardsEl.innerHTML = `<div>
        <h1 class="general-title">${catNameWords
          .slice(0, catNameWords.length - 1)
          .join(' ')}<span class="violet"> ${
      catNameWords[catNameWords.length - 1]
    }</span>
        </h1>        
        <div class='category-books-container'>${booksHtml}</div>
      </div>`;

    const allCardsEl = document.querySelectorAll('.js-card-click');

    allCardsEl.forEach(el => {
      el.addEventListener('click', event => {
        markupBook(event.currentTarget.dataset.id);
      });
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  Notiflix.Loading.remove();
}

//Рендер 5 книг
function bestBooks(books) {
  return books
    .map((el, index, array) => {
      return cardBook(el, index);
    })
    .join('');
}

// Рендер однієї книги
export function cardBook(book, index) {
  return `<div class='one-book-container col-${index} js-card-click' data-id="${book._id}">
       <div class="wrap">
        <img class='book-img' src="${book.book_image}" width="180px" height="226px"  alt="${book.title}"  loading="lazy"/>
        <div class="overlay" >
          <p class="overlay-text">QUICK VIEW</p>
        </div>
       </div>
        <div>
        <h3 class='book-title'>${book.title}</h3>
        <p class='book-author'>${book.author}</p>
        </div>
      </div>`;
}

bestBooksAllCategories();
