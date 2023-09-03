import { BookshelfApiService } from './api-service';

const cardsEl = document.querySelector('.js-cards');

const booksApi = new BookshelfApiService();

// Рендер категорій по 5 книг
async function bestBooksAllCategories() {
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
        <h3 class='book-title'>${book.title}</h3>
        <p class='book-author'>${book.author}</p>
        <img class='book-img' src="${book.book_image}" width="180px" height="226px" />
      </div>`;
}

bestBooksAllCategories();