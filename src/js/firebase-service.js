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

export class FirebaseService {
  constructor() {
    // Your web app's Firebase configuration
    this.firebaseConfig = {
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
    this.app = initializeApp(this.firebaseConfig);

    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(this.app);

    this.db = getDatabase(this.app);

    this.isAuth = false;
    this.userName;
    this.userID;
    this.email;

    const localUser = localStorage.getItem('auth');

    if (!localUser) return;

    const userData = JSON.parse(localUser);

    this.isAuth = userData.isAuth;
    this.userName = userData.userName;
    this.userID = userData.userID;
    // this.email = userData.email;
  }

  signUpUser(userName, email, password) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        // Signed in

        this.userName = userName;
        console.log(userCredential.user);
        this.userID = this.auth.currentUser.uid;
        this.email = email;

        this.writeUserDataToDB(this.userID, this.userName, this.email);

        const userData = {
          isAuth: true,
          userName: this.userName,
          userID: this.userID,
        };

        localStorage.setItem('auth', JSON.stringify(userData));
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Ошибка регистрации:', errorMessage);
        // Notify.failure('Error');
      });
  }

  signInUser(email, password) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        // Signed in
        this.userName = 'NOne';
        this.userID = userCredential.user.uid;
        this.email = email;

        const userData = {
          isAuth: true,
          userName: this.userName,
          userID: this.userID,
        };

        localStorage.setItem('auth', JSON.stringify(userData));
        Notify.success('Login success' + this.userID);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error adding name to the database:', error);
        Notify.failure(error.message);
      });
  }

  writeUserDataToDB(userID, name, email) {
    const dbRef = ref(this.db, 'users/' + userID);
    set(dbRef, {
      displayName: name,
    })
      .then(() => {
        Notify.success('Name added to the database successfully.');
      })
      .catch(error => {
        console.error('Error adding name to the database:', error);
      });
  }

  writeBooksToDB(userId, data) {
    const dbRef = ref(this.db, 'users/' + userId + '/books');
    set(dbRef, data)
      .then(() => {
        Notify.success('Book added to the database successfully.');
      })
      .catch(error => {
        console.error('Error adding name to the database:', error);
      });
  }

  async readUserData(userID) {
    const dbRef = ref(this.db);
    const snapshot = await get(child(dbRef, `users/${userID}`));

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No data available');
    }

    // .catch(error => {
    //   console.error(error);
    // });
  }
}

const data = {
  ddd: 'ffff',
  ssss: 'sssss',
};

export const user = new FirebaseService();
// user.signInUser('testffdsgr9@mail.com', 'Potayto3447');
// user.signUpUser('Admin', 'testffdsgr9@mail.com', 'Potayto3447');
// user.readUserData('0p1zBHaRgLTHVX7icxwAqHQS5El1');
console.log(user);
// console.log(user.userName);

// user.writeBooksToDB(user.userID, data);
