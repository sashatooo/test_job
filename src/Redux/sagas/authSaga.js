import { getAvatarPhoto, getUser } from '../../api/index'
import { setAvatarPhotoAC, setUserAC } from '../actions/actonCreater'
import { put, call, take, takeEvery } from 'redux-saga/effects'
import { GET_USER } from '../constants'


function* fetchUser() {
    const userResponse =  yield call(getUser)
    yield put(setUserAC(userResponse.data)) 
    const photoResponse =  yield call(getAvatarPhoto, 1)
    yield put(setAvatarPhotoAC(photoResponse.data))                 // распараллелить
}


export function* authWatcher() {
    yield takeEvery(GET_USER, fetchUser) 
}

