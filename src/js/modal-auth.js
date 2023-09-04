import * as basicLightbox from 'basiclightbox';
import { BookshelfApiService } from './api-service';
import iconClose from '../images/x-close.png';

function disableBodyScroll() {
  document.body.style.overflow = 'hidden';
}

function enableBodyScroll() {
  document.body.style.overflow = 'visible';
}

const instance = basicLightbox.create(
  `<div class="js-modal-auth">
    <div class="modal-uath">
        <button class="modal-uath-cls-btn" type="button" aria-label="close">
            <img  class="modal-close-svg" src="${iconClose}" alt="" width="24" height="24">
        </button>

        <form class="signin-form js-signin-form">
            <div class="contacts-feedback">
            <input
                class="log-name"
                type="text"
                name="name"
                id="name"
                placeholder="Your name..."
                required
            />
            <input
                type="mail"
                class="log-mail"
                name="mail"
                id="mail"
                placeholder="Your mail..."
                required
            />
            <input
                type="password"
                class="log-password"
                name="password"
                id="password"
                placeholder="Your password"
                required
            />
            <button class="sing-btn" type="submit">
                SING UP
            </button>
            </div>
        </form>
</div>
</div>`,
  {
    onShow: () => {
      document.addEventListener('keydown', onEscDown);
      disableBodyScroll();
    },
    onClose: () => {
      document.removeEventListener('keydown', onEscDown);
      enableBodyScroll();
    },
  }
);

function onEscDown(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

const signinBtnEl = document.querySelector('.js-signin-btn');

signinBtnEl.addEventListener('click', event => {
  instance.show();
});
