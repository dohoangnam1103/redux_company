// import { take, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { fork, takeLatest, put } from 'redux-saga/effects';

import  {  CS_CHANGE_PAGE,
          limitItem
        } from './constants';

import { getdataSucces, getdataError } from '../HomePage/actions';
import { linkArticles } from '../../utils/api';

let limit = limitItem;
let offset = 0;

export function* changePage (action) {
  const { page, numberShowOnePage } = action;
  const offset = (page-1)*numberShowOnePage + 1;

  try {
    const data = yield axios.get(linkArticles, {
      params : {
        offset,
        limit: numberShowOnePage
      }
    })
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
