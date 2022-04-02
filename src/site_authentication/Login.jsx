import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Login_img from '../assets/images/login.png'

export default function Login() {
    return (
        <>
            <section className='slice_login_section'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6} className="login_form_left_bg">
                            <div className='slice_login_form_left'>
                                {/* <h1>Sliceledger</h1> */}
                                <Image src={Login_img} fluid/>
                                {/* <h2>Your Headline Text Here</h2> */}
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat quas repellendus ullam, illum magni ea doloremque nulla. Cumque sint, explicabo et necessitatibus accusamus quisquam reiciendis atque neque modi earum!</p> */}
                            </div>
                        </Col>
                        <Col lg={6} className="login_form_right_bg">
                            <div className="slice_login_form">
                                <div className='welcome_back_text'>Welcome Back</div>
                                <p className='login_subtitle'>Login into your Sliceledger Dashboard</p>
                                {/* <div className='slice_login_form_head'>Login</div> */}
                                <div className='slice_loginForm'>
                                    <form>
                                        <div className='email_field_div'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <input className='col-12' type="email" placeholder='Email' />
                                        </div>
                                        <div className='password_field_div'>
                                            <FontAwesomeIcon icon={faLock} />
                                            <input className='col-12' type="password" placeholder='Password' />
                                        </div>
                                        {/* <input type="submit" value="Login" /> */}
                                        {/* ========= remove below anchor tag ========== */}
                                        <Link className='login_btn_temporary' to="/dashboard">Login</Link>
                                    </form>
                                </div>
                                <div className='slice_login_form_foot'>
                                    <Link to="/signup">SignUp</Link>
                                    <Link to="/forget_password">Forget Password ?</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
