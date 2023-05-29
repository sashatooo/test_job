import { GET_POSTS, GET_COMMENTS, SET_POSTS } from '../constants.js'

export const getPostsAC = () => ({
    type: GET_POSTS
})

export const setPostsAC = (posts) => ({
    type: SET_POSTS,
    posts
})



export const getCommentsAC = (id) => ({
    type: GET_COMMENTS,
    commentId: id
})

export const setCommentsAC = (comments) => ({
    type: SET_POSTS,
    comments
})