import axios from 'axios'
import { IComment, IPost, IUser } from '../models'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export function getProfile(id: string) {
    return instance.get<IUser>(`users/${id}`)
}

export function getPost(id: string) {
    return instance.get<IPost>(`post/${id}`)
}

export function getUser() {
    return instance.get<IPost[]>('users/1')
}

export function getAvatarPhoto(id: number) {
    return instance.get<IPost[]>(`photos/${id}`)
}

export function getPosts() {
    return instance.get<IPost[]>('posts')
}

export function getComments(id: number) {
    return instance.get<IComment[]>(`comments?postId=${id}`)
}