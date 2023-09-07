import Notiflix from 'notiflix';
import { createPagination } from './pagination';
import { user } from './auth-user';

import dumpIcon from '../images/dump-icon.png';
import bookColumn1 from '../images/book-column@1x.png';
import bookColumn2 from '../images/book-column@2x.png';
import store1 from '../images/modal/store1.png';
import store2 from '../images/modal/store2.png';
import store3 from '../images/modal/store3.png';

const shoppingListEl = document.querySelector('.js-shopping_list');

//Рендер списку
export function markupShoppingList(books, page, perPage) {
  Notiflix.Loading.standard();

  const paginationEl = document.querySelector('.tui-pagination');

  if (books.length === 0) {
    shoppingListEl.innerHTML = `
      <div class="shopping_list-content">

        <p class="shopping_list-empty-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="book-column-img" srcset="${bookColumn1} 1x, ${bookColumn2} 2x"
          src="${bookColumn1}" alt="book-column" loading="lazy" />

    </div>`;
    paginationEl.classList.add('visually-hidden');
    Notiflix.Loading.remove();
    return;
  }

  if (books.length <= 3) {
    paginationEl.classList.add('visually-hidden');
  } else {
    paginationEl.classList.remove('visually-hidden');
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

      markupShoppingList(shoppingListData, page - 1, perPage);
      pagination = createPagination(shoppingListData.length);
      pagination.setTotalItems = shoppingListData.length;
      pagination.movePageTo(page - 1);
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
        <button class="btn-dump js-btn-dump" typy="button" data-id=${_id} aria-label="dump"> 
          <img class="icon-dump" src="${dumpIcon}" alt="" width="34" height="34" loading="lazy"/>
        </button>
        <img class="shop-list-item-img" src="${book_image}" alt="${book_image}" width="100" height="142" loading="lazy"/>  
      <div class="shop-list-description-wrapper"> 
       
        <h3 class="shop-list-item-title">${title}</h3>
        
        <p class="shop-list-item-category">${list_name}</p>
        <p class="shop-list-item-description">${description}</p>
        <div class="buy-item-wrapper">
          <p class="shop-list-item-author">${author}</p>
          <ul class="buy-list-shop list">
            <li class="buy-item">
              <a href="${buy_links[0].url}"><img class="store-1 store-1-sl" src="${store1}" alt="" width="46" loading="lazy"/></a>
            </li>
            <li class="buy-item">
              <a href="${buy_links[1].url}"><img class="store-2 store-2-sl" src="${store2}" alt="" width="33" loading="lazy"/></a>
            </li>
            <li class="buy-item">
              <a href="${buy_links[2].url}"><img class="store-3 store-3-sl" src="${store3}" alt="" width="32" loading="lazy"/></a>
            </li>
          </ul>
        </div>
      </div>
      </li>`;
}

function onClickBtnDump(event) {}

// ================ Local Storage
export let shoppingListData = [];
loadData();

function bookInList(id) {
  shoppingListData.find(book => book._id === id);
}

function loadData() {
  if (!user.isAuth) window.location.href = './index.html';

  if (!user.userID) return;

  user.readUserData(user.userID).then(data => {
    if (!data) return;
    if (data.books) shoppingListData = JSON.parse(data.books);
    markupShoppingList(shoppingListData, 1, 3);
  });
}

function saveData(data) {
  user.writeBooksToDB(user.userID, JSON.stringify(data));
}
