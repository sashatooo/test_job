import {all, call, spawn} from 'redux-saga/effects'
import { postWatcher } from './postSaga'
import { postsWatcher } from './postsSaga'

export function* rootWathcer() {
    yield all([postsWatcher(), postWatcher()])
}







// const sagas = [postWatcher, postsWatcher]

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