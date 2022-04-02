import React, {useState} from 'react'
import { Container, Navbar, Nav, NavDropdown, Image,Offcanvas } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGear, faKey, faSliders, faArrowRightFromBracket,faBarsStaggered ,faGauge,faWallet} from '@fortawesome/free-solid-svg-icons'
import {faUser, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import profilePic from '../../assets/images/member.png'

export default function Header() {
    const [toggleProfile_card, setToggleProfile_card] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function toggleProfile(params) {
        setToggleProfile_card(!toggleProfile_card)
    }
    return (
        <>
            <header className='slice_dash_header'>
                <Navbar expand="lg" className='slice_Nav' >
                    <Container fluid>
                        <Navbar.Brand href="#">SliceLedger</Navbar.Brand>
                        <div className="toggle" onClick={handleShow}><FontAwesomeIcon icon={faBarsStaggered}/></div>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                            <Nav
                                className='slice_link_div'
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                {/* <Link className='nav-link slice_navLink' to="/dashboard">Home</Link> */}
                                {/* <Link className='nav-link slice_navLink' to="/wallet">Wallet</Link> */}
                                <div className=' slice_navLink profile_pic_link' onClick={toggleProfile}>
                                    <Image src={profilePic} fluid />
                                    <div className='profile_card' style={toggleProfile_card ? {display:"block"} : {display:"none"}}>
                                        <div className='profile_card_top'>
                                            <Image src={profilePic} fluid />
                                            <h5>James Wan</h5>
                                            <em>james@gmail.com</em>
                                        </div>
                                        <div className='profile_card_bottom '>
                                            <ul>
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faUser}/></div>
                                                        <div className='title'><Link to='/user_profile'>My Profile</Link></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faPenToSquare}/></div>
                                                        <div className='title'><Link to='/'>Edit Profile</Link></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faSliders}/></div>
                                                        <div className='title'><Link to="/user_account_setting">Account Setting</Link></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faArrowRightFromBracket}/></div>
                                                        <div className='title'><Link to="/">logOut</Link></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <NavDropdown title="Profile" id="collasible-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link to = "/user_profile">
                                        <div className="myProfile_div d-flex">
                                            <div className="profile_icon ">
                                                <FontAwesomeIcon icon={faUser} />
                                            </div>
                                            <div className="profile_title"> My Profile</div>
                                        </div>
                                        </Link>
                                        
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to = "/user_account_setting">
                                        <div className="account_setting_div d-flex">
                                            <div className="account_setting_icon">
                                                <FontAwesomeIcon icon={faUserGear} />
                                            </div>
                                            <div className="account_setting_title"> Account Setting</div>
                                        </div>
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Link to = "/user_change_pwd">
                                        <div className="security_div d-flex">
                                            <div className="security_icon">
                                                <FontAwesomeIcon icon={faKey} />
                                            </div>
                                            <div className="security_title"> Security</div>
                                        </div>
                                        </Link>

                                    </NavDropdown.Item>

                                </NavDropdown> */}
                                {/* <Nav.Link className='slice_navLink' href="#action3">Faq</Nav.Link>
                                <Nav.Link className='slice_navLink' href="#action4">RoadMap</Nav.Link>
                                <Nav.Link className='slice_navLink' href="#action5">About</Nav.Link>
                                <Nav.Link className='slice_navLink' href="#action6">Contact</Nav.Link>
                                <Nav.Link className='slice_navLink' href="#action7">Services</Nav.Link> */}
                                {/* <Link to="/signup"className='nav-link signUp' >SignUp</Link> */}
                                {/* <Link to="/" className='nav-link logout' >LogOut</Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

     
        </>
    )
}
