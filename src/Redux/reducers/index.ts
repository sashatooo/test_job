import { combineReducers } from 'redux'
import authReducer from './authReduser';
import postReducer from './postReducer';
import postsReducer from './postsReducer'
import profileReduser from './profileReduser';




const rootReducer = combineReducers({
    postsComponent: postsReducer,
    postComponent: postReducer,
    authComponent: authReducer,
    profileComponent: profileReduser
})

type RootReducerType = typeof rootReducer; 
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer