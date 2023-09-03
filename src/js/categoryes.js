import { BookshelfApiService } from './api-service';
import { cardBook, bestBooksAllCategories } from './cards';

const cardsEl = document.querySelector('.js-cards');
const allCategories = document.querySelector('.categoryes');

async function listCategories() {
  const booksApi = new BookshelfApiService();
  const catList = await booksApi.fetchCategoryList();

  const listHtml = catList
    .map(el => {
      return `<li class="categorie-item"><button data-list_name=${el.list_name} class="categorie-btn">${el.list_name}</button>
      </li>`;
    })
    .join('');
  allCategories.innerHTML = `<ul class="categorie-list list"><li><button class="categorie-btn active">All categories</button></li>${listHtml}</ul>`;

  const catsBtn = document.querySelectorAll('.categorie-btn');

  catsBtn.forEach(el => {
    el.addEventListener('click', async event => {
      const books = await booksApi.fetchBooksByCategory(el.textContent);
      document
        .querySelector('.categorie-btn.active')
        .classList.remove('active');

      el.classList.add('active');
      if (books.length) {
        const booksHtml = books
          .map(el => {
            return cardBook(el);
          })
          .join('');
        cardsEl.innerHTML = `<div>
        <h2 class='category-name'>${el.textContent}</h2>
        <div class='category-books-container'>${booksHtml}</div>
      </div>`;
      } else {
        bestBooksAllCategories();
      }
    });
  });
}

listCategories();
