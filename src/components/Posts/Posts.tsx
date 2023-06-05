import React, { useEffect, useState } from 'react'
import { IPost } from '../../models'
import Post from '../Post/Post'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Image, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import { useSelector, useDispatch } from 'react-redux'
import { getPostsAC, setCurrentPageAC, setPortionNumberAC } from '../../Redux/actions/actonCreater'
import { AppStateType } from '../../Redux/reducers'
import Pagination from '../Pagination/Pagination'


type PropsType = {

}


function Posts() {


	const posts = useSelector((store: AppStateType) => store?.postsComponent?.posts)
	const pageSize = useSelector((store: AppStateType) => store?.postsComponent?.pageSize)
    const currentPage = useSelector((store: AppStateType) => store?.postsComponent?.currentPage)
    const porsionSize = useSelector((store: AppStateType) => store?.postsComponent?.porsionSize)
    const portionNumber = useSelector((store: AppStateType) => store?.postsComponent?.portionNumber)

	const [showPosts, setShowPosts] = useState<IPost[]>([])
	const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [isSortPosts, setIsSortPosts] = useState<boolean>(false)
	const dispath = useDispatch()

	

	useEffect(() => {
		dispath(getPostsAC())
	}, [])

	useEffect(() => {
		filterPosts(searchTerm)
	}, [posts, searchTerm, isSortPosts, currentPage])

	function setCurrentPage(currentPage: number) {
		dispath(setCurrentPageAC(currentPage))
	}

	function setPortionNumber(portionNumber: number) {
		dispath(setPortionNumberAC(portionNumber))
	}

	

	const filterPosts = (searchTerm: string) => {
		let tempPosts=[]
		let tempFilteredPosts = posts.filter((p: any) =>
			p.title.toUpperCase().includes(searchTerm.toUpperCase())
		)
		
		
		if (isSortPosts) {
			tempFilteredPosts = tempFilteredPosts.sort(function (a: any, b:any) {
				let nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase()
				if (nameA < nameB)
					return -1
				if (nameA > nameB)
					return 1
				return 0
			})
		}
		setFilteredPosts(tempFilteredPosts)

		const leftBoundary = (currentPage === 1) ? 0 : (currentPage - 1) * pageSize
		const rightBoundary = currentPage * pageSize
		for(let i = leftBoundary; i < rightBoundary && i < tempFilteredPosts.length; i++) {
			tempPosts.push(tempFilteredPosts[i]);
		} 
		setShowPosts(tempPosts)
		// dispath(setCurrentPageAC()) бага
	}

	


	return (
		<>
			<Search setSearchTerm={setSearchTerm} setIsSortPosts={setIsSortPosts} />
			<Row xs={1} md={1} className="g-4">
				{showPosts.map((p, idx) => (
					<Col key={idx}>
						<Card className='m-2'>
							<Card.Body>
								<Nav.Link as={Link} to={`/profile/${p.userId}`} >
									<Image src='https://via.placeholder.com/150/771796' roundedCircle />
								</Nav.Link>
								
								<Card.Title>{p.title}</Card.Title>
								<Card.Text>
									<Post key={p.id} post={p} />
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<Pagination 	setCurrentPage={setCurrentPage} 
							currentPage={currentPage} 
							filteredPosts={filteredPosts} 
							pageSize={pageSize} 
							porsionSize={porsionSize}
							portionNumber={portionNumber} 
							setPortionNumber={setPortionNumber}/>
		</>
	)
}

export default Posts