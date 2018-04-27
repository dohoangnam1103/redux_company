import { put, takeLatest  } from 'redux-saga/effects';
import axios from 'axios';
import { actDeleteItem } from '../actions/index';

const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';

function* fetchDeleteData(action) {
    try {
        console.log(action);
        const data = yield  axios({
            method: 'delete',
            url: linkData + '/' + action.payload.id,
            data: {
                id: action.payload.id
            }
        });

        yield put(actDeleteItem(action.payload.id));
    } catch (error) {
        yield put({type: "FETCH_ERROR", error})
    }
}

export function* watchFetchDeleteData() {
    yield takeLatest('START_DELETE', fetchDeleteData)
}

