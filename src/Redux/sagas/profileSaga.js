import { getProfile } from '../../api/index'
import { put, take, call, takeLatest } from 'redux-saga/effects'
import { GET_PROFILE } from '../constants'
import { setProfileAC } from '../actions/actonCreater'


function* fetchProfile(action) {
    
    const userId = action.userId
    const response =  yield call(getProfile, userId)
    yield put(setProfileAC(response.data)) 
}


export function* profileWatcher() {
    yield takeLatest(GET_PROFILE, fetchProfile) 
}

