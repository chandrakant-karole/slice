import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap"

export default function Header() {
    return (
        <>
            <header className='slice_header'>
                <Navbar expand="lg" className='slice_Nav'>
                    <Container fluid>
                        <Navbar.Brand href="#">SliceLedger</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                            <Nav
                                className='slice_link_div'
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Team</Nav.Link>
                                <Nav.Link href="#action3">Faq</Nav.Link>
                                <Nav.Link href="#action4">RoadMap</Nav.Link>
                                <Nav.Link href="#action5">About</Nav.Link>
                                <Nav.Link href="#action6">Contact</Nav.Link>
                                <Nav.Link href="#action7">Services</Nav.Link>
                                <Nav.Link className='signUp' href="#action7">SignUp</Nav.Link>
                                <Nav.Link className='login' href="#action8">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
