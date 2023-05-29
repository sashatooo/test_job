import { SET_POSTS } from '../constants.js'
import { IComment } from '../../models'

const initialState = {
    comments: [] as Array<IComment>
}

const postReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                comments: action.comments
            }
        }
        default:
            return state
    }
    

}

export default postReducer


