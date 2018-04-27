import { put, takeLatest  } from 'redux-saga/effects';
import axios from 'axios';
import { actAddItem } from '../actions/index';

const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';

function* fetchAddData(action) {
    try {
        const data = yield  axios({
            method: 'post',
            url: linkData,
            data: {
            id: action.payload.id,
            name: action.payload.content,
            state: action.payload.status
            }
        });

        yield put(actAddItem(action.payload.id, action.payload.content, action.payload.status))
    } catch (error) {
        yield put({type: "FETCH_ERROR", error})
    }
}

export function* watchFetchAddData() {
    yield takeLatest('START_ADD', fetchAddData)
}

