/**
 * Gets the repositories of the user from Github
 */
import axios from 'axios';

import { statusFetchSuccess, CS_CHANGE_SELECT_FEED } from './constants';
import { getdataSucces, getdataError } from './actions';

import { CS_CHANGE_PAGE } from '../Pagination/constants';
import { CS_FILTER_TAG } from '../Sidebar/constants';

import { call, put, select, takeLatest, fork } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { linkArticles } from '../../utils/api';

let limit = 10;
let offset = 0;
export let linkDataNow;

export function* fetchData() {
  try {
    const data = yield axios.get(`${linkArticles}?limit=${limit}`);
    yield data.status === statusFetchSuccess && put(getdataSucces(data.data));
  }
  catch (error) {
    yield put(getdataError(error));
  }
}

export function* changeFeedSelect (action) {
  console.log(action.data);
  if (action.data === 'myFeed') {
    
  } else if (action.data === 'global') {

  } 
  debugger
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {

  yield fork(fetchData);
  yield takeLatest(CS_CHANGE_SELECT_FEED, changeFeedSelect);

}
