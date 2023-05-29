import { combineReducers } from 'redux'
import postReducer from './postReducer';
import postsReducer from './postsReducer'




const rootReducer = combineReducers({
    postsComponent: postsReducer,
    postComponent: postReducer
})

type RootReducerType = typeof rootReducer; 
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer