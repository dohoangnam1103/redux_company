// import { take, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { fork } from 'redux-saga/effects';

export function* fetchPagination () {
  
  // const data = yield axios.get('https://conduit.productionready.io/api/articles');
  

  // console.log(data.data.articlesCount);


  
}


// Individual exports for testing
export default function* defaultSaga() {

  // See example in containers/HomePage/saga.js
  yield  fork(fetchPagination);

}
