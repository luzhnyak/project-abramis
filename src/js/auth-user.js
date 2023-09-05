//fireBase
// import { auth, app } from './firebase';
import { FirebaseService } from './firebase-service';

const signInBtnElAll = document.querySelectorAll('.js-signin-btn');
const signInBtnEl = document.querySelector('.js-signin-btn');
const authBtnEl = document.querySelector('.js-auth-btn');
const displayNameEl = document.querySelector('.js-display-name');
const logoutBtnElAll = document.querySelectorAll('.js-logout-btn');
const logoutBtnEl = document.querySelector('.js-logout-btn');

let isVisibleLogOut = false;

logoutBtnElAll.forEach(el => el.addEventListener('click', onClickLogout));

authBtnEl.addEventListener('click', event => {
  isVisibleLogOut = !isVisibleLogOut;
  logoutBtnEl.classList.toggle('visually-hidden');
});

export function authVisual() {
  if (user.isAuth) {
    signInBtnElAll.forEach(el => (el.style.display = 'none'));
    authBtnEl.style.display = 'flex';
    if (user.userName) displayNameEl.textContent = user.userName.slice(0, 8);
  } else {
    signInBtnElAll.forEach(el => (el.style.display = 'flex'));
    logoutBtnElAll[1].classList.remove('visually-hidden');
    authBtnEl.style.display = 'none';
    displayNameEl.textContent = 'User';
  }
}

//logout

function onClickLogout(event) {
  event.preventDefault();
  logoutBtnEl.style.display = 'none';
  signInBtnEl.style.display = 'flex';
  authBtnEl.style.display = 'none';
  user.auth.signOut().then(() => {
    localStorage.removeItem('auth');
  });
}

export const user = new FirebaseService();
authVisual();

// document.addEventListener('click', event => {
//   if (isVisibleLogOut) logoutBtnEl.classList.add('visually-hidden');
// });
