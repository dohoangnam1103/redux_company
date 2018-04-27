import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects';

import { listen } from './test';
import {  fetchDataFirst } from './fetch';
import {  watchFetchAddData } from './fetchAddItem';
import {  watchFetchDeleteData } from './fetchDeleteItem';
import {  watchFetchChangeStatusData } from './fetchChangeStatus';
import {  watchFetchEditData } from './fetchEditItem';

export default function* rootSaga() {
    yield all([
        fetchDataFirst(),
        listen(),
        watchFetchAddData(),
        watchFetchDeleteData(),
        watchFetchChangeStatusData(),
        watchFetchEditData()
    ])
}