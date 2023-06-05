import { IAvatarPhoto, IUser } from "../../models"
import { SET_AVATAR_PHOTO, SET_USER } from "../constants"

const initialState = {
    user: {} as IUser,
    avatarPhoto: {} as IAvatarPhoto
}

const authReducer = (state = initialState, action: any): InitialState => {
    
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.user
                }
            }
        }
        case SET_AVATAR_PHOTO: {
            return {
                ...state, 
                avatarPhoto: {
                    ...state,
                    ...action.photo
                } 
            }
        }
       
        default:
            return state
    }
    

}

export default authReducer

export type InitialState = typeof initialState

