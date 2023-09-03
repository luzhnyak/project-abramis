const shoppingListEl = document.querySelector('.js-shopping-list');

//Рендер списку
function markupShoppingList(books) {
  if (books.length === 0) return;
  shoppingListEl.innerHTML = books
    .map(el => {
      return `<ul class="shopping-list list">
      ${cardBook(el)}
      </ul>`;
    })
    .join('');
}

// Рендер однієї книги
function cardBook(book) {
  return `<li>
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <br>
      </li>`;
}

// ================ Local Storage

let shoppingListData = [];
let bookData = {};
loadData();
markupShoppingList(shoppingListData);

function bookInList(id) {
  shoppingListData.find(book => book._id === id);
}

function loadData() {
  const data = localStorage.getItem('shopping-list');

  if (!data) return;

  shoppingListData = JSON.parse(data);
}

function saveData(data) {
  localStorage.setItem('shopping-list', JSON.stringify(data));
}
