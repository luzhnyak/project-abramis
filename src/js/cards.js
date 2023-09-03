import { BookshelfApiService } from './api-service';

const cardsEl = document.querySelector('.js-cards');

const booksApi = new BookshelfApiService();

// Рендер категорій по 5 книг
async function bestBooksAllCategories() {
  const topBooksData = await booksApi.fetchTopBooks();

  const cardsHtml = topBooksData
    .map(el => {
      return `<div>
        <h2 class='category-name'>${el.list_name}</h2>
        <div class='category-books-container'>${bestBooks(el.books)}</div>
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
  return `<div class='one-book-container'>
        <img class='book-img' src="${book.book_image}" width="180px" height="226px" />
        <h3 class='book-title'>${book.title}</h3>
        <p class='book-author'>${book.author}</p>
      </div>`;
}

bestBooksAllCategories();