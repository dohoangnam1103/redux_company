import { put, takeLatest  } from 'redux-saga/effects';
import axios from 'axios';
import { actChangeStatus } from '../actions';

const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';

function* fetchChangeStatusData(action) {
    try {
        const {id, status} = action.payload;

        const data = yield  axios({
            method: 'put',
            url: linkData + '/' + id,
            data: {
                status: !status
            }
        });

        yield data.status === 200 && put(actChangeStatus(id));
    } catch (error) {
        yield put({type: "FETCH_ERROR", error})
    }
}

export function* watchFetchChangeStatusData() {
    yield takeLatest('START_CHANGE_STATUS', fetchChangeStatusData)
}

