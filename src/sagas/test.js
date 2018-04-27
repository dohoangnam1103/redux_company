import { delay } from 'redux-saga';
import { put, takeLatest  } from 'redux-saga/effects';


export function* test() {
    yield console.log('test saga');
    yield delay(1000);

    yield put({type: 'test1'})
    
}

export function* listen(){
    yield takeLatest ('fetchDataFirst',test)
}





