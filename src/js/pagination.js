import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

// Дані для пагінації (ваш список книжок, наприклад)
const booksData = [...];
// Функція для відображення книжок на сторінці
function renderBooks(books) {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.textContent = book.title;
        booksContainer.appendChild(bookElement);
    });
}


function getPageBooks(page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return booksData.slice(start, end);
}

// Створення пагінації
const paginationContainer = document.getElementById('pagination');
const itemsPerPage = 3;
const options = {
    totalItems: booksData.length,
    itemsPerPage,
    visiblePages: 4,
    centerAlign: false,
};

const pagination = new Pagination(paginationContainer, options);

pagination.on('beforeMove', event => {
    const currentPage = event.page;
    const booksForPage = getPageBooks(currentPage, itemsPerPage);
    renderBooks(booksForPage);
});

pagination.movePageTo(1);