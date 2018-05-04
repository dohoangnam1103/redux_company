import { put } from 'redux-saga/effects';
import axios from 'axios';
import { actFetchData } from '../actions';

const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';

export function* fetchDataFirst(){
    try {
        const data = yield  axios({
            method: 'GET',
            url: linkData
        });

        yield data.status === 200 && put(actFetchData(data.data));
    } catch (error) {
        yield put({type: "FETCH_ERROR", error})
    }
}