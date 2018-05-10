// import { take, call, put, select } from 'redux-saga/effects';
import { fork, put } from 'redux-saga/effects';

import axios from 'axios';

import { getTag } from './actions'

export function* fetchTag() {
  console.log('getTag');
  const linkRequest = 'https://conduit.productionready.io/api/tags';

  try {
    const repos = yield axios.get(linkRequest);
    yield repos.data !== null && put(getTag(repos.data));

  } catch (err) {
      yield put(actGetError(err));
  }

}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield fork(fetchTag)
}
