// import { take, call, put, select } from 'redux-saga/effects';
import { fork, put, takeLatest } from 'redux-saga/effects';

import { getdataSucces, getdataError } from '../HomePage/actions';

import axios from 'axios';

import { getTag } from './actions'

import { CS_FILTER_TAG } from './constants';

const linkRequest = 'https://conduit.productionready.io/api';

export function* fetchTag() {
  console.log('getTag');

  try {
    const repos = yield axios.get(`${linkRequest}/tags`);
    yield repos.data !== null && put(getTag(repos.data));

  } catch (err) {
      yield put(actGetError(err));
  }

}


export function* filterTag (action) {
  try {
    const data = yield axios.get(`${linkRequest}/articles?tag=${action.tag}&limit=10`)
    debugger
    yield  data.data !== undefined && put (getdataSucces(data.data))
  }
  catch(error) {
    put (getdataError(error));
  }
  
}


// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield fork(fetchTag);
  yield takeLatest( CS_FILTER_TAG, filterTag);
  
}
