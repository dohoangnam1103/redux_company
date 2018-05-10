// import { take, call, put, select } from 'redux-saga/effects';

import axios from 'axios';

import { fork } from 'redux-saga/effects';
export function* fetchData () {
  



}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield fork(fetchData)
}
