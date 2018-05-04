import { put, takeLatest  } from 'redux-saga/effects';
import axios from 'axios';
import { actChangeStatus } from '../actions/index';

const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';

function* fetchChangeStatusData(action) {
    try {
        
        const data = yield  axios({
            method: 'put',
            url: linkData + '/' + action.payload.id,
            data: {
                id: action.payload.id,
                name: action.payload.name,
                status: !action.payload.status
            }
        });

        yield data.status === 200 && put(actChangeStatus(action.payload.id));
    } catch (error) {
        yield put({type: "FETCH_ERROR", error})
    }
}

export function* watchFetchChangeStatusData() {
    yield takeLatest('START_CHANGE_STATUS', fetchChangeStatusData)
}

