import { put, takeEvery, all } from 'redux-saga/effects'

function* incrementAsync() {
    //yield delay(1000)
    yield put({ type: 'INCREMENT' })
  }
   
export function* appListSaga(){
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)

}