import {all} from 'redux-saga/effects'
import { postWatcher } from './postSaga'
import { postsWatcher } from './postsSaga'

export function* rootWathcer() {
    yield all([postsWatcher(), postWatcher()])
}