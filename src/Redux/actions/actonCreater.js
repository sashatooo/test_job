import { 
    GET_POSTS, 
    GET_COMMENTS, 
    SET_POSTS, 
    SET_CURRENT_PAGE, 
    SET_PORTION_NUMBER } from '../constants.js'

export const getPostsAC = () => ({
    type: GET_POSTS
})

export const setPostsAC = (posts) => ({
    type: SET_POSTS,
    posts
})

export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const setPortionNumberAC = (portionNumber) => ({
    type: SET_PORTION_NUMBER,
    portionNumber
})




export const getCommentsAC = (id) => ({
    type: GET_COMMENTS,
    commentId: id
})

export const setCommentsAC = (comments) => ({
    type: SET_POSTS,
    comments
})