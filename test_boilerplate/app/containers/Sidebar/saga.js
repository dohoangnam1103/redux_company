// import { take, call, put, select } from 'redux-saga/effects';
import { fork, put, takeLatest } from 'redux-saga/effects';
import { getdataSucces, getdataError } from '../HomePage/actions';
import axios from 'axios';
import { getTag } from './actions'
import { CS_FILTER_TAG } from './constants';
import { linkTags, linkArticles } from '../../utils/api';


export function* fetchTag() {

  try {
    const repos = yield axios.get(linkTags);
    yield repos.data !== null && put(getTag(repos.data));

  } catch (err) {
      yield put(actGetError(err));
  }

}


export function* filterTag (action) {

  try {
    const data = yield axios.get(linkArticles, {
      params : {
        tag: action.tag,
        limit: 10
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
  yield fork(fetchTag);
  yield takeLatest( CS_FILTER_TAG, filterTag);
  
}
