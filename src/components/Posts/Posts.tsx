import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IComment, IPost } from '../../models'
import Post from '../Post/Post'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Image } from 'react-bootstrap'
import Search from '../Search/Search'

type PropsType = {

}


function Posts() {

	const [posts, setPosts] = useState<IPost[]>([])															// почемуто рендерится чето много раз
	const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [isSortPosts, setIsSortPosts] = useState<boolean>(false)

	useEffect(() => {
		fetchPosts()
	}, [])

	useEffect(() => {
		filterPosts(searchTerm)
	}, [posts, searchTerm, isSortPosts])


	async function fetchPosts() {
		const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
		setPosts(response.data)
	}



	const filterPosts = (searchTerm: string) => {
		let filteredPosts = posts.filter((p) =>
			p.title.toUpperCase().includes(searchTerm.toUpperCase())
		)
		if (isSortPosts) {
			filteredPosts = filteredPosts.sort(function (a, b) {
				let nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase()
				if (nameA < nameB)
					return -1
				if (nameA > nameB)
					return 1
				return 0
			})
		}
		setFilteredPosts(filteredPosts)
	}







	return (
		<>
			<Search setSearchTerm={setSearchTerm} setIsSortPosts={setIsSortPosts} />
			<Row xs={1} md={1} className="g-4">
				{filteredPosts.map((p, idx) => (
					<Col key={idx}>
						<Card className='m-2'>
							<Card.Body>
								<Image src='https://via.placeholder.com/150/771796' roundedCircle />
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