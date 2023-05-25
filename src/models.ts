export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export interface IComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

type Geo = {
    lat: string
    lng: string
}

type Addres = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

type Company = {
    name: string
    catchPhrase: string
    bs: string
}

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: Addres
    phone: string
    website: string
    company: Company
}