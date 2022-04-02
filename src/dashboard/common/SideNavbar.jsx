import React from 'react'
import { Container, Row, Col,Accordion } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faGauge,faUser,faPenToSquare,faSliders,faUserXmark,faKey,faFileInvoice,faUserCheck,faMoneyBillTransfer,faMessage,faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
// import { faWallet} from '@fortawesome/free-regular-svg-icons'
export default function SideNavbar() {
    return (
        <>
            <div className="slice_dash_sideNav">
                        <Container>
                            <Row>
                                <Col lg={12} className="px-0">
                                    <div className="sideNav_header">
                                        <div className="slice_logo">
                                            <a href="#" className='navbar-brand'>SliceLedger</a>
                                        </div>
                                    </div>
                                    <div className="sideNav_body">
                                        <div className="sideNav_menu">
                                            <ul>
                                                <li>
                                                    <div className='menu'>
                                                        <div className='menu_icon'>
                                                            <FontAwesomeIcon icon={faGauge} />
                                                        </div>
                                                        <div className='title'><Link to='/dashboard'>Dashboard</Link></div>
                                                    </div>

                                                </li>
                                                <li>
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faUser} />
                                                                    </div>
                                                                    <div className='title'>Profile</div>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faUser} />
                                                                    </div>
                                                                    <div className='title'><Link to='/user_profile'>My Profile</Link></div>
                                                                </div>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faPenToSquare} />
                                                                    </div>
                                                                    <div className='title'><Link to='/edit_user_profile'>Edit Profile</Link></div>
                                                                </div>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faSliders} />
                                                                    </div>
                                                                    <div className='title'><Link to='/account_details'>Account Details</Link></div>
                                                                </div>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                    <FontAwesomeIcon icon={faUserXmark} />
                                                                    </div>
                                                                    <div className='title'><Link to='/disable_account'>Disable Account</Link></div>
                                                                </div>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faKey} />
                                                                    </div>
                                                                    <div className='title'><Link to='/user_change_pwd'>Change Password</Link></div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>


                                                    </Accordion>
                                                </li>
                                                <li>
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faWallet} />
                                                                    </div>
                                                                    <div className='title'>Wallet</div>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faWallet} />
                                                                    </div>
                                                                    <div className='title'><Link to='/wallet'>Fiat Wallet</Link></div>
                                                                </div>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                        <FontAwesomeIcon icon={faWallet} />
                                                                    </div>
                                                                    <div className='title'><Link to='/wallet'>Slice Wallet</Link></div>
                                                                </div>
                                                                <div className='menu'>
                                                                    <div className='menu_icon'>
                                                                    <FontAwesomeIcon icon={faFileInvoice} />
                                                                    </div>
                                                                    <div className='title'><Link to='/wallet'>Transaction List</Link></div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>


                                                    </Accordion>

                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div className='menu_icon'>
                                                        <FontAwesomeIcon icon={faUserCheck} />
                                                        </div>
                                                        <div className='title'><Link to='/kyc_verification'>KYC Verification</Link></div>
                                                    </div>

                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div className='menu_icon'>
                                                        <FontAwesomeIcon icon={faMoneyBillTransfer} />
                                                        </div>
                                                        <div className='title'><Link to='/transaction_history'>Transaction History</Link></div>
                                                    </div>

                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div className='menu_icon'>
                                                            <FontAwesomeIcon icon={faMessage} />
                                                        </div>
                                                        <div className='title'><Link to='/feedback'>Feedback</Link></div>
                                                    </div>

                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div className='menu_icon'>
                                                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                                        </div>
                                                        <div className='title'><Link to=''>Logout</Link></div>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
        </>
    )
}
