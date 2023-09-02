import { BookshelfApiService } from './api-service';

const cardsEl = document.querySelector('.js-cards');

const booksApi = new BookshelfApiService();

// Рендер категорій по 5 книг
async function bestBooksAllCategoryes() {
  const topBooksData = await booksApi.fetchTopBooks();

  const cardsHtml = topBooksData
    .map(el => {
      return `<div>
        <h2>${el.list_name}</h2>
        ${bestBooks(el.books)}
      </div>`;
    })
    .join('');

  cardsEl.innerHTML = cardsHtml;
}

//Рендер 5 книг
function bestBooks(books) {
  return books
    .map(el => {
      return cardBook(el);
    })
    .join('');
}

// Рендер однієї книги
function cardBook(book) {
  return `<div>
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      </div>`;
}

bestBooksAllCategoryes();
