import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Login() {
    return (
        <>
            <section className='slice_login_section'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={4}>
                            <div className="slice_login_form">
                                <div className='slice_login_form_head'>Login</div>
                                <div className='slice_loginForm'>
                                    <form>
                                        <div>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <input className='col-10' type="email" placeholder='Email' />
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faLock} />
                                            <input className='col-10' type="password" placeholder='Password' />
                                        </div>
                                        <input type="submit" value="Login" />
                                    </form>
                                </div>
                                <div className='slice_login_form_foot'>
                                    <a href="/">SignUp</a>
                                    <a href="/">Forget Password ?</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
