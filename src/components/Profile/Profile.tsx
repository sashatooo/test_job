import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../api'
import { getProfileAC, setProfilesPostsAC } from '../../Redux/actions/actonCreater'
import { AppStateType } from '../../Redux/reducers'
import Post from '../Post/Post'

type ProfileProps = {
	routeMatch: string | undefined
}

function Profile(props: ProfileProps) {

	const dispath = useDispatch()
	const user = useSelector((store: AppStateType) => store?.profileComponent?.profile)
	const profilesPosts = useSelector((store: AppStateType) => store?.profileComponent?.profilesPosts)
	

	let userId = props.routeMatch
	if(!userId) userId = '1'

	useEffect(() => {
		dispath(getProfileAC(userId))
	}, [])

	useEffect(() => {
		getPostForProfile(Number(userId))
	}, [userId])

	async function getPostForProfile(id: number) {
		const response = await getPosts()
		const profilesPosts = response.data.filter(p => p.userId === id)
		dispath(setProfilesPostsAC(profilesPosts))
	}

	

	
	
	return (
		<Card style={{ width: '100%', padding: '15px' }}>
			<Card.Img variant="top" src="https://itproger.com/img/news/1613146336.jpg" />
			<Card.Body>
				<Card.Title>{user.name}</Card.Title>
				<Card.Text>
					<div>
						<div>e-mail: {user.email}</div>
					</div>
					<div>
						<div>web-site: {user.website}</div>
					</div>
				</Card.Text>
				<Row xs={1} md={1} className="g-4">
					{profilesPosts.map((p: any, idx: any) => (
						<Col key={idx}>
							<Card className='m-2'>
								<Card.Body>
									<Card.Title>{p.title}</Card.Title>
									<Card.Text>
										<Post key={p.id} post={p} />
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Card.Body>
		</Card>
	)
}

export default Profile