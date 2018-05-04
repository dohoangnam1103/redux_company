import { all, fork } from 'redux-saga/effects';

import {  fetchDataFirst } from './fetch';
import {  watchFetchAddData } from './fetchAddItem';
import {  watchFetchDeleteData } from './fetchDeleteItem';
import {  watchFetchChangeStatusData } from './fetchChangeStatus';
import {  watchFetchEditData } from './fetchEditItem';

export default function* rootSaga() {
    yield all([
        fork(fetchDataFirst),
        watchFetchAddData(),
        watchFetchDeleteData(),
        watchFetchChangeStatusData(),
        watchFetchEditData()
    ])
}