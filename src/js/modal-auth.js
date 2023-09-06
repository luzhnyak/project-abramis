import * as basicLightbox from 'basiclightbox';
import iconClose from '../images/x-close.png';
import { user, authVisual } from './auth-user';
// import { markupShoppingList, shoppingListData } from './shopping-list/';

let inOrUp = 'up';

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
            <img  class="modal-close-svg" src="${iconClose}" alt="" width="24" height="24" loading="lazy">
        </button>

        <form class="signin-form js-signup-form">
            <div class="userdata-inputs">

              <input class="userdata-input name js-name" type="text" name="name" id="name" placeholder="NAME">            
              <input class="userdata-input mail" type="email"  name="email" id="mail" placeholder="MAIL" required>            
              <input class="userdata-input password" type="password" name="password" id="password" placeholder="PASSWORD" required>            
              <button class="sing-btn js-sing-btn" type="submit">
                  SIGN UP
              </button>
            </div>
        </form>
        <div class="sign">
            <a href="" class="sign-active js-choose-signup">SIGN UP</a>
            <a href="" class="js-choose-signin">SIGN IN</a>
        </div>
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

function onClickClose(event) {
  instance.close();
}

function onEscDown(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

const signinBtnElAll = document.querySelectorAll('.js-signin-btn');

signinBtnElAll.forEach(el =>
  el.addEventListener('click', event => {
    instance.show();

    const submitBtnEl = document.querySelector('.js-sing-btn');

    const closeBtn = document.querySelector('.modal-uath-cls-btn');
    closeBtn.addEventListener('click', onClickClose);

    const formEl = document.querySelector('.js-signup-form');
    formEl.addEventListener('submit', onSubmitForm);

    const chooseSignupEl = document.querySelector('.js-choose-signin');
    const inputNameEl = document.querySelector('.js-name');
    chooseSignupEl.addEventListener('click', event => {
      event.preventDefault();
      inOrUp = 'in';
      submitBtnEl.textContent = 'SIGN IN';
      inputNameEl.style.display = 'none';
      chooseSignupEl.classList.add('sign-active');
      chooseSigninEl.classList.remove('sign-active');
    });

    const chooseSigninEl = document.querySelector('.js-choose-signup');
    chooseSigninEl.addEventListener('click', event => {
      event.preventDefault();
      inOrUp = 'up';
      submitBtnEl.textContent = 'SIGN UP';
      inputNameEl.style.display = 'block';
      chooseSignupEl.classList.remove('sign-active');
      chooseSigninEl.classList.add('sign-active');
    });
  })
);

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { name, email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  event.currentTarget.reset();

  if (inOrUp === 'up') {
    user.signUpUser(data.name, data.email, data.password, authVisual);
  } else {
    user.signInUser(data.email, data.password, authVisual);
  }

  instance.close();
}
