import { 
    GET_POSTS, 
    GET_COMMENTS, 
    SET_POSTS, 
    SET_CURRENT_PAGE, 
    SET_PORTION_NUMBER, 
    GET_USER,
    SET_USER,
    GET_AVATAR_PHOTO,
    SET_AVATAR_PHOTO,
    GET_PROFILE,
    SET_PROFILE,
    SET_PROFILES_POSTS} from '../constants.js'


export const getProfileAC = (userId) => ({
    type: GET_PROFILE,
    userId
})
export const setProfileAC = (profile) => ({
    type: SET_PROFILE,
    profile
})
export const setProfilesPostsAC = (posts) => ({
    type: SET_PROFILES_POSTS,
    posts
})



export const getUserAC = () => ({
    type: GET_USER
})
export const setUserAC = (user) => ({
    type: SET_USER,
    user
})
export const getAvatarPhotoAC = () => ({
    type: GET_AVATAR_PHOTO
})
export const setAvatarPhotoAC = (photo) => ({
    type: SET_AVATAR_PHOTO,
    photo
})



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