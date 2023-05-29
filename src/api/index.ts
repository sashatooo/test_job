import axios from 'axios'
import { IComment, IPost } from '../models'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export function getPosts() {
    return instance.get<IPost[]>('posts')
}

export function getComments(id: number) {
    return instance.get<IComment[]>(`comments?postId=${id}`)
}