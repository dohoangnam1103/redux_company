// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest, fork } from 'redux-saga/effects';
import { CS_SIGN_UP } from './constants';
import { signupError, signupSuccess } from './actions';

import axios from 'axios';


export function* startSignUp (action) {
  // Select username from store
  const { inputEmail, inputPassword, userName } = action.payload;

  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  const linkRequest = 'https://conduit.productionready.io/api/users';


  try {
    const repos = yield axios.post(
      'https://conduit.productionready.io/api/users',
      {
        "user":{
          "username": userName,
          "email": inputEmail,
          "password": inputPassword
        }
      }
    );
    console.log(repos);
    yield (repos)? 
      put(signupSuccess(repos.data))
      : 
      yield put(signupError(err));


    // yield put(reposLoaded(repos, username));
  } catch (err) {
      yield put(signupError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // console.log('123');
  // See example in containers/HomePage/saga.js
  // yield takeLatest(CS_SIGN_UP, startSignUp);
  yield takeLatest(CS_SIGN_UP, startSignUp);
}
