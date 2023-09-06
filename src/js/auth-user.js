import { FirebaseService } from './firebase-service';

const signInBtnElAll = document.querySelectorAll('.js-signin-btn');
// const signInBtnEl = document.querySelector('.js-signin-btn');
// const authBtnEl = document.querySelector('.js-auth-btn');
const authBtnElAll = document.querySelectorAll('.js-auth-btn');
const displayNameElAll = document.querySelectorAll('.js-display-name');
const logoutBtnElAll = document.querySelectorAll('.js-logout-btn');
// const logoutBtnEl = document.querySelector('.js-logout-btn');
const menuListElAll = document.querySelectorAll('.js-list_menu');

// let isList;

logoutBtnElAll.forEach(el => el.addEventListener('click', onClickLogout));

authBtnElAll.forEach(el =>
  el.addEventListener('click', event => {
    logoutBtnElAll.forEach(el => el.classList.toggle('visually-hidden'));
  })
);

export function authVisual() {
  if (user.isAuth) {
    menuListElAll.forEach(el => el.classList.remove('visually-hidden'));
    signInBtnElAll.forEach(el => el.classList.add('visually-hidden'));
    logoutBtnElAll.forEach(el => el.classList.add('visually-hidden'));
    authBtnElAll.forEach(el => el.classList.remove('visually-hidden'));
    if (user.userName) {
      displayNameElAll.forEach(
        el => (el.textContent = user.userName.slice(0, 8))
      );
    } else {
      displayNameElAll.forEach(el => (el.textContent = 'User'));
    }
  } else {
    menuListElAll.forEach(el => el.classList.add('visually-hidden'));
    signInBtnElAll.forEach(el => el.classList.remove('visually-hidden'));
    logoutBtnElAll.forEach(el => el.classList.add('visually-hidden'));
    authBtnElAll.forEach(el => el.classList.add('visually-hidden'));
    displayNameElAll.forEach(el => (el.textContent = 'User'));
  }
}

//logout

function onClickLogout(event) {
  event.preventDefault();

  user.auth.signOut().then(() => {
    localStorage.removeItem('auth');
    user.isAuth = false;
    authVisual();
    window.location.href = './index.html';
  });
}

export const user = new FirebaseService();
authVisual();
