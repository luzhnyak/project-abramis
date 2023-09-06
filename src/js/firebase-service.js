// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { get } from 'firebase/database';
import { getDatabase, ref, set, child } from 'firebase/database';

import Notiflix from 'notiflix';

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
    this.userName = 'User';
    this.userID;
    this.email;

    const localUser = localStorage.getItem('auth');

    if (!localUser) return;

    const userData = JSON.parse(localUser);

    this.isAuth = userData.isAuth;
    this.userName = userData.userName;
    this.userID = userData.userID;
  }

  signUpUser(userName, email, password, callback) {
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

        callback();
      })
      .catch(error => {
        if ('auth/email-already-in-use') {
          Notiflix.Notify.failure('This email already in use.');
        }
      });
  }

  async signInUser(email, password, callback) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      this.userID = userCredential.user.uid;
      this.email = email;

      const data = await this.readUserData(this.userID);

      this.userName = data.displayName;
      this.isAuth = true;

      const userData = {
        isAuth: true,
        userName: this.userName,
        userID: this.userID,
      };

      localStorage.setItem('auth', JSON.stringify(userData));

      callback();
    } catch (error) {
      if ('auth/user-not-found') {
        Notiflix.Notify.failure('This user not found.');
      }

      if ('auth/wrong-password') {
        Notiflix.Notify.failure('Wrong password.');
      }
    }
  }

  writeUserDataToDB(userID, name, email) {
    if (!userID) return;

    const dbRef = ref(this.db, 'users/' + userID);
    set(dbRef, {
      displayName: name,
    })
      .then(() => {
        // console.log('Name added to the database successfully.');
      })
      .catch(error => {
        console.error('Error adding user to the database:', error);
      });
  }

  writeBooksToDB(userID, data) {
    if (!userID) return;

    const dbRef = ref(this.db, 'users/' + userID + '/books');
    set(dbRef, data)
      .then(() => {
        // console.log('Book added to the database successfully.');
      })
      .catch(error => {
        console.error('Error adding book to the database:', error);
      });
  }

  async readUserData(userID) {
    if (!userID) return;

    const dbRef = ref(this.db);
    const snapshot = await get(child(dbRef, `users/${userID}`));

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No data available');
    }
  }
}
