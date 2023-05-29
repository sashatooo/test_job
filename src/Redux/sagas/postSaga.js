import { getPosts } from '../../api/index'
import { setCommentsAC } from '../actions/actonCreater'
import { put, takeEvery, call } from 'redux-saga/effects'
import { GET_COMMENTS } from '../constants'


export function* fetchComments() {
    const response = yield call(getPosts)
    yield put(setCommentsAC(response.data))
}

export function* postWatcher() {
    // yield takeEvery(GET_COMMENTS, fetchComments)
}

