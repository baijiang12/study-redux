import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from "./actionTypes";
import { initList } from "./actionCreators";

function* getInitList() {
    const list = ['f','s']
    const action = initList(list)
    yield put(action)
}
function* todoSaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}

export default todoSaga;