import React, { useEffect } from 'react'

import { Card, Image, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../Redux/reducers'
import { getUserAC } from '../../Redux/actions/actonCreater'

type Props = {}

function Header({ }: Props) {

    useEffect(() => {
        dispath(getUserAC())
    }, [])

    const dispath = useDispatch()
    const user = useSelector((store: AppStateType) => store?.authComponent?.user)
    const avatarPhoto = useSelector((store: AppStateType) => store?.authComponent?.avatarPhoto)





    return (
        <>
            <Navbar collapseOnSelect bg="light" expand={false} className="mb-3">
                <Container fluid className="justify-content-start">
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} className="me-2" />
                    <Navbar.Brand href="#">Company</Navbar.Brand>

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Card style={{ width: '100%' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={avatarPhoto.thumbnailUrl} />
                                        {/* <Image src={avatarPhoto.thumbnailUrl} roundedCircle /> */}
                                        <Card.Title className='mt-3'>{user?.name}</Card.Title>
                                        <Card.Text>{user?.email}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Nav className="m-4">
                                    <Nav.Link as={Link} to='/' >List of posts</Nav.Link>
                                    <Nav.Link as={Link} to='/profile' >About me</Nav.Link>
                                </Nav>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header