import { SET_POSTS } from '../constants.js'
import { IPost } from '../../models'

const initialState = {
    posts: [] as Array<IPost>
}

const postsReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts
            }
        }
       
        default:
            return state
    }
    

}

export default postsReducer


