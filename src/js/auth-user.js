//fireBase
// import { auth, app } from './firebase';
import { FirebaseService } from './firebase-service';

const signInBtnEl = document.querySelector('.js-signin-btn');
const authBtnEl = document.querySelector('.js-auth-btn');
const displayNameEl = document.querySelector('.js-display-name');
const logoutBtnEl = document.querySelector('.js-logout-btn');

logoutBtnEl.addEventListener('click', onClickLogout);
displayNameEl.addEventListener('click', event => {
  logoutBtnEl.style.display = 'flex';
});

export function authVisual() {
  console.log(user.isAuth);

  if (user.isAuth) {
    signInBtnEl.style.display = 'none';
    authBtnEl.style.display = 'flex';
    if (user.userName) displayNameEl.textContent = user.userName.slice(0, 8);
  } else {
    signInBtnEl.style.display = 'flex';
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

// //sign in the user
// function onSignIn(e) {
//   e.preventDefault();

//   const email = e.currentTarget.elements.email.value;
//   const password = e.currentTarget.elements.password.value;

//   signIn(email, password);
//   signInEl.reset();
// }

// //====================
// function userAuth(auth) {
//   return auth ? authorizedUser(auth, true) : false;
// }
// userAuth(userParsLocal);

// // Перевіряємо стан авторизації
// function authorizedUser(login = '', reg = false) {
//   auth.onAuthStateChanged(user => {
//     if (reg || user) {
//       authorized.forEach(el => el.classList.remove('display-none'));
//       unauthorizedDiv.style.display = 'none';
//       nameUserEl.textContent = login;
//     } else {
//       authorized.forEach(el => el.classList.remove('display-none'));
//       unauthorizedDiv.style.display = 'block';
//     }
//   });
// }

// function getUserFromDb(userId) {
//   const dbRef = ref(getDatabase());
//   get(child(dbRef, `users/${userId}`))
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         const userValue = snapshot.val();
//         authorizedUser(userValue.login);
//         localStorage.setItem(USER_KEY, JSON.stringify(userValue.login));
//       } else {
//         console.log('No data available');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }
// // Поява кнопки для виходу
// authButton.addEventListener('click', onClickAuthButton);

// function onClickAuthButton() {
//   logoutButton.classList.toggle('logout-hidden');
// }

// const data = {
//   ddd: 'ffff',
//   ssss: 'sssss',
// };

export const user = new FirebaseService();
user.signInUser('admin@mail.com', 'Potayto0106', authVisual);
// user.signUpUser('Admin', 'admin@mail.com', 'Potayto0106');
// user.readUserData('0p1zBHaRgLTHVX7icxwAqHQS5El1');
// console.log(user);
// console.log(user.userName);

// user.writeBooksToDB(user.userID, data);

// export { onSignIn, onSignUp };
