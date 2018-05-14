// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest, fork } from 'redux-saga/effects';
import { CS_SIGN_UP } from './constants';
import { signupError, signupSuccess } from './actions';
import { linkUsers } from '../../utils/api';
import { actLoginSuccess } from '../LoginPage/actions';

import axios from 'axios';


export function* startSignUp (action) {
  // Select username from store
  const { inputEmail, inputPassword, userName } = action.payload;

  try {
    const repos = yield axios.post(
      linkUsers,
      {
        "user":{
          "username": userName,
          "email": inputEmail,
          "password": inputPassword
        }
      }
    );
    
    yield (repos)? 
      put(actLoginSuccess(repos.data))
      : 
      yield put(signupError(err));
  } catch (err) {
      yield put(signupError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(CS_SIGN_UP, startSignUp);
}
