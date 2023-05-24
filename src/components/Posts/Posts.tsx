import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IComment, IPost } from '../../models'
import Post from '../Post/Post'

type PropsType = {

}


function Posts() {

	let [posts, setPosts] = useState<IPost[]>([])															// почемуто рендерится чето много раз
	let [comments, setComments] = useState<IComment[]>([])

	async function fetchPosts() {
		const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
		// console.log('response',response)
		setPosts(response.data)
	}

	async function fetchComments() {
		const response = await axios.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
		// console.log('response',response)
		setComments(response.data)
	}



	useEffect(() => {
		fetchPosts()
	}, [])

	useEffect(() => {
		fetchComments()
	}, [])



	return (
		<>
			{ posts.map((p) => {

				let commentsForPost = comments.filter(c => c.postId === p.id)

			
				return <Post key={p.id} post={p} comments={commentsForPost}/>
			})}
		</>
	)
}

export default Posts