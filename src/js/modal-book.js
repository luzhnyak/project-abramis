import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';

import { BookshelfApiService } from './api-service';
import { user } from './auth-user';

import iconClose from '../images/x-close.png';
import store1 from '../images/modal/store1.png';
import store2 from '../images/modal/store2.png';
import store3 from '../images/modal/store3.png';

const booksApi = new BookshelfApiService();

function disableBodyScroll() {
  document.body.style.overflow = 'hidden';
}

function enableBodyScroll() {
  document.body.style.overflow = 'visible';
}

const instance = basicLightbox.create(`<div class="js-modal"></div>`, {
  onShow: () => {
    document.addEventListener('keydown', onEscDown);
    disableBodyScroll();
  },
  onClose: () => {
    document.removeEventListener('keydown', onEscDown);
    enableBodyScroll();
  },
});

export async function markupBook(id) {
  try {
    bookData = await booksApi.fetchDetailsByBookId(id);
    const { book_image, title, author, description, buy_links } = bookData;

    instance.show();

    const instanceEl = document.querySelector('.js-modal');

    instanceEl.innerHTML = `<div class="modal container">
    <button class="modal-close-btn" type="button" aria-label="close">
      <img class="modal-close-svg" src="${iconClose}" alt="" width="24" height="24" loading="lazy"/>
    </button>
    <div class="modal-info">
    <img class="book-image" src="${book_image}" alt="" loading="lazy"/>
    <div class="book-info">
    <h2 class="title">${title}</h2>
    <h3 class="author">${author}</h3>
    <p class="description">${description}</p>
    <ul class="buy-list list">
      <li class="buy-item">
        <a href="${buy_links[0].url}"><img class="store-1" src="${store1}" alt="" width="62" height="" loading="lazy"/></a>
      </li>
      <li class="buy-item">
        <a href="${buy_links[1].url}"><img class="store-2" src="${store2}" alt="" width="33" height="" loading="lazy"/></a>
      </li>
      <li class="buy-item">
        <a href="${buy_links[2].url}"><img class="store-3" src="${store3}" alt="" width="38" height="" loading="lazy"/></a>
      </li>
    </ul>
    </div>
    </div>
    <button class="add-to-shoping-list js-add-list-btn" data-id=${id} type="button">ADD TO SHOPING LIST</button>
    <p class="text-info is-hidden" id="text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
  </div>
  </div>
  `;

    const closeBtn = document.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', onClickbBtn);

    const btnAddEl = document.querySelector('.js-add-list-btn');
    btnAddEl.addEventListener('click', onClickBtnAdd);

    if (!user.isAuth) {
      btnAddEl.textContent = 'PLEASE SIGN IN TO CONTINUE';
      btnAddEl.disabled = true;
      return;
    }

    if (shoppingListData.find(book => book._id === id)) {
      btnAddEl.textContent = 'REMOVE FROM THE SHOPPING LIST';
    } else {
      btnAddEl.textContent = 'ADD TO SHOPING LIST';
    }
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

function onClickbBtn(event) {
  instance.close();
}

function onEscDown(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

// ================ Local Storage

let shoppingListData = [];
let bookData = {};
loadData();

function onClickBtnAdd(event) {
  const id = event.target.dataset.id;
  const textInfoEL = document.querySelector('.text-info');

  if (shoppingListData.find(book => book._id === id)) {
    shoppingListData = shoppingListData.filter(book => book._id !== id);
    event.target.textContent = 'ADD TO SHOPING LIST';
    textInfoEL.classList.add('is-hidden');
  } else {
    shoppingListData.push(bookData);
    event.target.textContent = 'REMOVE FROM THE SHOPPING LIST';
    textInfoEL.classList.remove('is-hidden');
  }

  saveData(shoppingListData);
}

function loadData() {
  user.readUserData(user.userID).then(data => {
    if (!data) return;
    if (data.books) shoppingListData = JSON.parse(data.books);
  });
}

function saveData(data) {
  user.writeBooksToDB(user.userID, JSON.stringify(data));
}
