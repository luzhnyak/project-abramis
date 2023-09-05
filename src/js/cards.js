import { BookshelfApiService } from './api-service';
import { markupBook } from './modal-book';
import Notiflix from 'notiflix';

const cardsEl = document.querySelector('.js-cards');

const booksApi = new BookshelfApiService();

// Рендер категорій по 5 книг
export async function bestBooksAllCategories() {
  Notiflix.Loading.standard();

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
      markupBook(event.target.dataset.id);
    });
  });

  allSeeMoreEl.forEach(el => {
    el.addEventListener('click', event => {
      booksCategory(event.target.dataset.catname);
    });
  });

  Notiflix.Loading.remove();
}

// Рендер всіх книг однієї категорії
export async function booksCategory(catName) {
  Notiflix.Loading.standard();
  const books = await booksApi.fetchBooksByCategory(catName);

  if (books.length) {
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
        markupBook(event.target.dataset.id);
      });
    });

    Notiflix.Loading.remove();
  } else {
    bestBooksAllCategories();
  }
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
  return `<div class='one-book-container col-${index}'>
       <div class="wrap">
        <img class='book-img js-card-click' data-id="${book._id}" src="${book.book_image}" width="180px" height="226px"  alt="${book.title}"  loading="lazy"/>
        <div class="overlay">
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
