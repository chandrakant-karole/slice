import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <section className='slice_login_section'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={5}>
                            <div className="slice_login_form">
                                <div className='slice_login_form_head'>Login</div>
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
