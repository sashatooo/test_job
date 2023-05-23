import React from 'react'

import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

type Props = {}

function Header({ }: Props) {

    return (
        <>
            <Navbar collapseOnSelect bg="light" expand={false} className="mb-3">
                <Container fluid className="justify-content-start">
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} className="me-2"/>
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
                                <Nav.Link><Link to='/'>List of posts</Link></Nav.Link>
                                <Nav.Link><Link to='/aboutme'>About me</Link></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header