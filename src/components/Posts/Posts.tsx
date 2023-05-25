import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IComment, IPost } from '../../models'
import Post from '../Post/Post'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Image } from 'react-bootstrap'

type PropsType = {

}


function Posts() {

	const [posts, setPosts] = useState<IPost[]>([])															// почемуто рендерится чето много раз


	async function fetchPosts() {
		const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
		// console.log('response',response)
		setPosts(response.data)
	}





	useEffect(() => {
		fetchPosts()
	}, [])




	return (
		<>
			{/* {posts.map((p) => {




				return <Post key={p.id} post={p} />
			})} */}
			<Row xs={1} md={1} className="g-4">
				{posts.map((p, idx) => (
					<Col key={idx}>
						<Card>
							<Card.Body>
								<Image src='holder.js/171x180' roundedCircle />
								<Card.Title>{p.title}</Card.Title>
								<Card.Text>
									<Post key={p.id} post={p} />
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</>
	)
}

export default Posts