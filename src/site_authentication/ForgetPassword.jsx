import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Col, Container, Row } from 'react-bootstrap'
export default function ForgetPassword() {
    return (
        <>
            <section className='slice_forgetPassword_section'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={5}>
                            <div className="slice_forgetPassword_form">
                                <div className='slice_forgetPassword_form_head'>Forget Password</div>
                                <div className='slice_forgetPasswordForm'>
                                    <form>
                                        <div className='email_field_div'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <input className='col-12' type="email" placeholder='Email' />
                                        </div>
                                        <div className='password_field_div'>
                                            <FontAwesomeIcon icon={faLock} />
                                            <input className='col-12' type="password" placeholder='Password' />
                                        </div>
                                        <div className='password_field_div'>
                                            <FontAwesomeIcon icon={faLock} />
                                            <input className='col-12' type="password" placeholder='Confirm Password' />
                                        </div>
                                        <input type="submit" value="Continue" />
                                    </form>
                                </div>
                                {/* <div className='slice_forgetPassword_form_foot'>
                                    <Link to="/signup">SignUp</Link>
                                    <a href="/">Forget Password ?</a>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
