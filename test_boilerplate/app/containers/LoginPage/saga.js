// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, put } from 'redux-saga/effects';
import { CS_LOGIN }  from './constants';
import { actLoginError, actLoginSuccess }  from './actions';
import { actUserLogin } from '../HeaderPage/actions';

import axios from 'axios';

// Individual exports for testing

export function* fetchLogin (action) {
  const { email, password } = action.payload;
  const linkRequest = 'https://conduit.productionready.io/api/users';

  try {
    const repos = yield axios.post(
      'https://conduit.productionready.io/api/users/login',

      {
        "user":{
          "email": email,
          "password": password
        }
      }
    );

    yield repos.data !== null && put(actLoginSuccess(repos.data));
    yield repos.data !== null && put(actUserLogin());

    // yield put(reposLoaded(repos, username));
  } catch (err) {
      yield put(actLoginError(err));
  }
}

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(CS_LOGIN, fetchLogin)
 
}
