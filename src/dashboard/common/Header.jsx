import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <header className='slice_dash_header'>
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
                                <Nav.Link className='slice_navLink' href="#action1">Home</Nav.Link>
                                <Nav.Link className='slice_navLink' href="#action2">Wallet</Nav.Link>
                                {/* <Nav.Link className='slice_navLink' href="#action3">Faq</Nav.Link>
                                <Nav.Link className='slice_navLink' href="#action4">RoadMap</Nav.Link>
                                <Nav.Link className='slice_navLink' href="#action5">About</Nav.Link>
                                <Nav.Link className='slice_navLink' href="#action6">Contact</Nav.Link>
                                <Nav.Link className='slice_navLink' href="#action7">Services</Nav.Link> */}
                                {/* <Link to="/signup"className='nav-link signUp' >SignUp</Link> */}
                                <Link to="/login" className='nav-link login' >LogOut</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
