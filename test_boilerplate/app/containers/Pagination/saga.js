// import { take, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { fork, takeLatest, put } from 'redux-saga/effects';
import { CS_CHANGE_PAGE } from './constants';
import { getdataSucces, getdataError } from '../HomePage/actions';

const  linkData = 'https://conduit.productionready.io/api/articles';
let limit = 10;
let offset = 0;
export let linkDataNow;


export function* changePage (action) {
  const { page, numberShowOnePage } = action;
  const offset = (page-1)*numberShowOnePage + 1;
  linkDataNow = `${linkData}?offset=${offset}&limit=${numberShowOnePage}`;
  try {
    const data = yield axios.get(linkDataNow)
    yield  data.data !== undefined && put (getdataSucces(data.data))
  }
  catch(error) {
    put (getdataError(error));
  }
  
}


// Individual exports for testing
export default function* defaultSaga() {

  // See example in containers/HomePage/saga.js

  yield takeLatest(CS_CHANGE_PAGE, changePage);


}
