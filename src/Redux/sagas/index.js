import {all, call, spawn} from 'redux-saga/effects'
import { authWatcher } from './authSaga'
import { postWatcher } from './postSaga'
import { postsWatcher } from './postsSaga'
import { profileWatcher } from './profileSaga'

export function* rootWathcer() {
    yield all([postsWatcher(), postWatcher(), authWatcher(), profileWatcher()])
}







// const sagas = [postWatcher, postsWatcher, authWatcher]

// const retrySagas = yield sagas.map(saga => {
//     return spawn(function* (){
//         while(true) {
//             try {
//                 yield call(saga)
//             } catch (e) {
//                 console.log(e)
//             }
//         }
//     })
// })

// yield all(retrySagas)