import { put, takeLatest  } from 'redux-saga/effects';
import axios from 'axios';
import { actEdit } from '../actions/index';

const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';

function* fetchEditData(action) {
    try {
        
        const data = yield  axios({
            method: 'put',
            url: linkData + '/' + action.payload.id,
            data: {
                id: action.payload.id,
                name: action.payload.name,
                status: action.payload.status
            }
        });

        const { id, name} = yield action.payload;
        yield data.status === 200 && put(actEdit(id, name));
    } catch (error) {
        yield put({type: "FETCH_ERROR", error})
    }
}

export function* watchFetchEditData() {
    yield takeLatest('START_EDIT_ITEM', fetchEditData)
}

