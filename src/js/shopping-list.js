const shoppingListEl = document.querySelector('.js-shopping_list');
import dumpIcon from '../images/dump-icon.png';
import store1 from '../images/modal/store1.png';
import store2 from '../images/modal/store2.png';
import store3 from '../images/modal/store3.png';

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
function cardBook({
  book_image,
  title,
  list_name,
  author,
  description,
  buy_links,
}) {
  return `<li class="shopping-list-book-item">
        <img class="shop-l-item-img" src="${book_image}" alt="${book_image}" width="100" height="142" />  
        <div class="shop-list-description-wrapper">      
        <h3>${title}</h3>
        <p>${list_name}</p>
        <p>${description}</p>
        <p>${author}</p>
        <ul class="buy-list list">
          <li class="buy-item">
            <a href="${buy_links[0].url}"><img class="store-1" src="${store1}" alt="" width="" height=""/></a>
          </li>
          <li class="buy-item">
            <a href="${buy_links[1].url}"><img class="store-2" src="${store2}" alt="" width="" height=""/></a>
          </li>
          <li class="buy-item">
            <a href="${buy_links[2].url}"><img class="store-3" src="${store3}" alt="" width="" height=""/></a>
          </li>
        </ul>
        </div>
      </li>`;
}

// ================ Local Storage

export let shoppingListData = [];
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
