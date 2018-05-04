import { firebaseApp } from '../index';

firebase.auth().onAuthStateChanged(function(user) {
  console.log('change user');
  if (user) {
      console.log(user);
      let email;
      email =  user.email;

  } else {
      console.log('no user login');
    // No user is signed in.
  }
});