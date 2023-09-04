import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, get, update } from 'firebase/database';
import { getDatabase, ref, set, remove, child, push } from 'firebase/database';
import { log } from 'console';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
firebaseConfig = {
  apiKey: 'AIzaSyDS0DuqLbmpznNhiwCXHv-oM-VF44DW1h0',
  authDomain: 'bookshelf-b9aa2.firebaseapp.com',
  databaseURL:
    'https://bookshelf-b9aa2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bookshelf-b9aa2',
  storageBucket: 'bookshelf-b9aa2.appspot.com',
  messagingSenderId: '40570077936',
  appId: '1:40570077936:web:eecbed5fd61fb7aa02f835',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getDatabase(app);

function signUpCreateUser(
  login = 'admin3',
  email = 'test3@mail.com',
  password = 'Potayto3447'
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in

      const user = userCredential.user;
      const userId = auth.currentUser.uid;
      // modal.classList.toggle('is-hidden');
      // Notify.success('Success registretion');

      // setUserToDb(userId, login, email, password);
      // getUserFromDb(userId);
      // authorizedUser(login);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Ошибка регистрации:', errorMessage);
      // Notify.failure('Error');
    });
}

function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      const userId = auth.currentUser.uid;
      console.log(userId);
      // getUserFromDb(userId);
      // authorizedUser(login);

      modal.classList.toggle('is-hidden');
      // Notify.success('Success');
      // logoutButton.style.transform = "translateX(-500px)";
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notify.failure('Error');
    });
}

function setUserToDb(id, login, email, password) {
  set(ref(db, 'users/' + id), {
    login,
    email,
    password,
  });
}

signIn('test3@mail.com', 'Potayto3447');
// signUpCreateUser();

// ==============================

export class FirebaseService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 12;
    this.total = 0;
  }

  async fetchAuth() {
    const responce = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        query: this.searchQuery,
        page: this.page,
        // image_type: 'photo',
        // orientation: 'horizontal',
        // safesearch: 'true',
        per_page: this.per_page,
      },
      headers: { Authorization: API_KEY },
    });

    this.total = responce.data.total_results;

    return responce.data.photos.map(element => {
      return {
        small: element.src.large,
        large: element.src.original,
        description: element.alt,
        filename:
          element.src.original.split('/')[
            element.src.original.split('/').length - 1
          ],
      };
    });
  }

  incrementPage() {}
}
