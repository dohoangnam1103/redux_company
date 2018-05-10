import { fork,take, call, put, select } from 'redux-saga/effects';


export function* test (){
}


// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield fork(test);
}
