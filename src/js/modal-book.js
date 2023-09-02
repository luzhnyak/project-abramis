import * as basicLightbox from 'basiclightbox';
import { BookshelfApiService } from './api-service';

const bookEl = document.querySelector('.js-test-modal');
bookEl.addEventListener('click', onBookClick);

const booksApi = new BookshelfApiService();
const ID_BOOK = '643282b1e85766588626a0dc';

async function markupBook(id) {
  const { book_image, title, author, description, buy_links } =
    await booksApi.fetchDetailsByBookId(id);
  const modalMarkup = basicLightbox.create(
    `<div class="modal modal-info">
    <button class="modal-close-btn" type="button">
      <svg class="modal-close-svg" width="24" height="24">
        <use href=""></use>
      </svg>
    </button>
    <img class="book-image" src="${book_image}" alt=""/>
    <h2 class="title">${title}</h2>
    <h3 class="author">${author}</h3>
    <p class="description">${description}</p>
    <ul class="buy-list list">
      <li class="buy-item">
        <a href="${buy_links[0].url}">${buy_links[0].name}</a>
      </li>
      <li class="buy-item">
        <a href="${buy_links[1].url}">${buy_links[1].name}</a>
      </li>
      <li class="buy-item">
        <a href="${buy_links[2].url}">${buy_links[2].name}</a>
      </li>
    </ul>
    <button class="add-to-shoping-list" type="button">ADD TO SHOPING LIST</button>
  </div>
  `,
    {
      onShow: () => {
        document.addEventListener('keydown', onEscDown);
      },
      onClose: () => {
        document.removeEventListener('keydown', onEscDown);
      },
    }
  );
  modalMarkup.show();
}

function onBookClick(evt) {
  evt.preventDefault();
  if (evt.target.classSlist == '.js-test-modal') {
    return;
  }
  markupBook(ID_BOOK);
}
function onEscDown(event) {
  if (event.code === "Esc") {
    markupBook.close();
  }
}