import { FirebaseService } from './firebase-service';
// import { markupShoppingList } from './shopping-list/';

const signInBtnElAll = document.querySelectorAll('.js-signin-btn');
const signInBtnEl = document.querySelector('.js-signin-btn');
const authBtnEl = document.querySelector('.js-auth-btn');
const authBtnElAll = document.querySelectorAll('.js-auth-btn');
const displayNameElAll = document.querySelectorAll('.js-display-name');
const logoutBtnElAll = document.querySelectorAll('.js-logout-btn');
const logoutBtnEl = document.querySelector('.js-logout-btn');
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
    // logoutBtnElAll.forEach(el => el.classList.remove('visually-hidden'));
    authBtnElAll.forEach(el => el.classList.add('visually-hidden'));
    // logoutBtnElAll[1].classList.remove('visually-hidden');
    // authBtnEl.style.display = 'none';
    displayNameElAll.forEach(el => (el.textContent = 'User'));
  }
}

//logout

function onClickLogout(event) {
  event.preventDefault();
  // logoutBtnEl.classList.add('visually-hidden');
  // signInBtnEl.classList.remove('visually-hidden');
  // authBtnEl.classList.add('visually-hidden');

  user.auth.signOut().then(() => {
    localStorage.removeItem('auth');
    user.isAuth = false;
    authVisual();
    window.location.href = '/index.html';
    // if (isList) {
    //   markupShoppingList([], 1, 3);
    // }
  });
}

export const user = new FirebaseService();
authVisual();

// document.addEventListener('click', event => {
//   if (isVisibleLogOut) logoutBtnEl.classList.add('visually-hidden');
// });
