import Notiflix from 'notiflix';
import { createPagination } from './pagination';

import dumpIcon from '../images/dump-icon.png';
import store1 from '../images/modal/store1.png';
import store2 from '../images/modal/store2.png';
import store3 from '../images/modal/store3.png';

const shoppingListEl = document.querySelector('.js-shopping_list');

//Рендер списку
export function markupShoppingList(books, page, perPage) {
  Notiflix.Loading.standard();

  if (books.length === 0) {
    Notiflix.Loading.remove();
    return;
  }

  shoppingListEl.innerHTML = books
    .slice((page - 1) * perPage, page * perPage)
    .map(el => {
      return `<ul class="shopping-list list">
      ${cardBook(el)}
      </ul>`;
    })
    .join('');

  const allBtnDumpEl = document.querySelectorAll('.js-btn-dump');

  allBtnDumpEl.forEach(el => {
    el.addEventListener('click', event => {
      const id = event.currentTarget.dataset.id;

      const slItemEl = document.querySelector(`.js-sl-item-${id}`);
      slItemEl.remove();

      shoppingListData = shoppingListData.filter(book => book._id !== id);
      saveData(shoppingListData);

      // if (shoppingListData.length === 0)

      if (shoppingListData.length <= pagination._options.totalItems - 3) {
        // markupShoppingList(shoppingListData, page - 1, perPage);
        pagination = createPagination(shoppingListData.length);
        pagination.setTotalItems = shoppingListData.length;
        pagination.movePageTo(page - 1);
      }
    });
  });

  let pagination = createPagination(shoppingListData.length);
  Notiflix.Loading.remove();
}

// Рендер однієї книги
function cardBook({
  _id,
  book_image,
  title,
  list_name,
  author,
  description,
  buy_links,
}) {
  return `<li class="shopping-list-book-item js-sl-item-${_id}">
        <button class="btn-dump js-btn-dump" typy="button" data-id=${_id}> 
          <img class="icon-dump" src="${dumpIcon}" alt="" />
        </button>
        <img class="shop-list-item-img" src="${book_image}" alt="${book_image}" width="100" height="142" />  
      <div class="shop-list-description-wrapper">      
        <h3 class="shop-list-item-title">${title}</h3>
        <p class="shop-list-item-category">${list_name}</p>
        <p class="shop-list-item-description">${description}</p>
        <div class="buy-item-wrapper">
          <p class="shop-list-item-author">${author}</p>
          <ul class="buy-list-shop list">
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
      </div>
      </li>`;
}

function onClickBtnDump(event) {}

// ================ Local Storage

export let shoppingListData = [];
let bookData = {};
loadData();
markupShoppingList(shoppingListData, 1, 3);

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
