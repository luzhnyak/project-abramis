import * as basicLightbox from 'basiclightbox';
import { BookshelfApiService } from './api-service';
import iconClose from '../images/x-close.png';
import store1 from '../images/modal/store1.jpg';
import store2 from '../images/modal/store2.jpg';
import store3 from '../images/modal/store3.jpg';

const bookEl = document.querySelector('.js-test-modal');
bookEl.addEventListener('click', onBookClick);

const booksApi = new BookshelfApiService();
const ID_BOOK = '643282b1e85766588626a0dc';

const instance = basicLightbox.create(`<div class="js-modal"></div>`, {
  onShow: () => {
    document.addEventListener('keydown', onEscDown);
  },
  onClose: () => {
    document.removeEventListener('keydown', onEscDown);
  },
});

async function markupBook(id) {
  const { book_image, title, author, description, buy_links } =
    await booksApi.fetchDetailsByBookId(id);

  instance.show();

  const instanceEl = document.querySelector('.js-modal');

  instanceEl.innerHTML = `<div class="modal container">
    <button class="modal-close-btn" type="button" aria-label="close">
      <img class="modal-close-svg" src="${iconClose}" alt="" width="24" height="24"/>
    </button>
    <div class="modal-info">
    <img class="book-image" src="${book_image}" alt=""/>
    <div class="book-info">
    <h2 class="title">${title}</h2>
    <h3 class="author">${author}</h3>
    <p class="description">${description}</p>
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
    </div>
    <button class="add-to-shoping-list" type="button">ADD TO SHOPING LIST</button>
  </div>
  `;
}

function onBookClick(evt) {
  evt.preventDefault();
  if (evt.target.classList === '.js-test-modal') {
    return;
  }
  markupBook(ID_BOOK);
}

function onEscDown(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
