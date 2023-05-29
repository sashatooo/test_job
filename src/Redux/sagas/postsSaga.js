import { getPosts } from '../../api/index'
import { setPostsAC } from '../actions/actonCreater'
import { put, takeEvery, call } from 'redux-saga/effects'
import { GET_POSTS } from '../constants'


function* fetchPosts() {
    const response = yield call(getPosts)
    yield put(setPostsAC(response.data))
}

export function* postsWatcher() {
    yield takeEvery(GET_POSTS, fetchPosts)
}

