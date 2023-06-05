import { IAvatarPhoto, IPost, IUser } from "../../models"
import { SET_PROFILE, SET_PROFILES_POSTS } from "../constants"

const initialState = {
    profile: {} as IUser,
    avatarPhoto: {} as IAvatarPhoto,
    profilesPosts: [] as IPost[]
}

const profileReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_PROFILES_POSTS: {
            return {
                ...state, profilesPosts: action.posts
            }
        }
        default:
            return state
    }
}

export default profileReduser


