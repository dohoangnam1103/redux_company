import { put, takeLatest, takeEvery   } from 'redux-saga/effects';
import axios from 'axios';

const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';

export function* fetchData(action) {
    try {
       yield put({type: "FETCH_SUCCEEDED"})
    } catch (error) {
       yield put({type: "FETCH_FAILED", error})
    }
}


function* watchFetchData() {
    yield takeEvery('START_FETCH', fetchData)
}



export function* fetchDataLoading() {
    console.log('1231231231232');
    const data = yield axios.get(linkData);


    yield console.log(data);
    // yield delay(1000);
    // yield put({type: 'test1'})
    
}

export function* fetchDataFirst(){
    yield takeEvery('START_FETCH', fetchDataLoading)
}