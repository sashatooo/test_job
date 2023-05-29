import { SET_CURRENT_PAGE, SET_POSTS } from '../constants.js'
import { IPost } from '../../models'

const initialState = {
    posts: [] as Array<IPost>,
    pageSize: 5,
    totalPostsCount: 100,
    currentPage: 1
}

const postsReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
       
        default:
            return state
    }
    

}

export default postsReducer


