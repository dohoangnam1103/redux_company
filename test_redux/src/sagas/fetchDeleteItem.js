import { put, takeLatest  } from 'redux-saga/effects';
import axios from 'axios';
import { actDeleteItem } from '../actions';

const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';

function* fetchDeleteData(action) {
    try {
        const { id } = action.payload;

        const data = yield  axios({
            method: 'delete',
            url: linkData + '/' + id,
            data: {
                id
            }
        });
        
        yield data.status === 200 && put(actDeleteItem(id));
    } catch (error) {
        yield put({type: "FETCH_ERROR", error})
    }
}

export function* watchFetchDeleteData() {
    yield takeLatest('START_DELETE', fetchDeleteData)
}

