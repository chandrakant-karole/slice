import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope, faUser, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { Col, Container, Row, Form, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Login_img from '../assets/images/login.png'

export default function SignUp() {
    let History = useNavigate()
    const submit = () => {
        History('/login');
    }
    return (
        <>
            <section className='slice_signUp_section'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6} className="signup_form_left_bg">
                            <div className='slice_signup_form_left'>
                                <Image src={Login_img} fluid />

                            </div>
                        </Col>
                        <Col lg={6} className="signup_form_right_bg">
                            <div className="slice_signUp_form">
                                <div className='slice_signUp_form_head'>SignUp</div>
                                <div className='slice_signUpForm'>
                                    <form>
                                        <div className='email_field_div'>
                                            <FontAwesomeIcon icon={faUser} />
                                            <input className='col-12' type="text" placeholder='First Name' />
                                        </div>
                                        <div className='email_field_div'>
                                            <FontAwesomeIcon icon={faUser} />
                                            <input className='col-12' type="text" placeholder='Last Name' />
                                        </div>
                                        <div className='email_field_div'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <input className='col-12' type="email" placeholder='Email' />
                                        </div>
                                        <div className='email_field_div'>
                                            <FontAwesomeIcon icon={faPhone} />
                                            <input className='col-12' type="tel" pattern='[0-9]{10}' title='xxxxx-xxxxx' placeholder='Phone Number' />
                                        </div>
                                        <div className='password_field_div'>
                                            <FontAwesomeIcon icon={faLock} />
                                            <input className='col-12' type="password" placeholder='Password' />
                                        </div>
                                        <div className='password_field_div'>
                                            <FontAwesomeIcon icon={faLock} />
                                            <input className='col-12' type="password" placeholder='Confirm Password' />
                                        </div>
                                        <div className='select_country_field_div'>
                                            <FontAwesomeIcon icon={faGlobe} />
                                            {/* <input className='col-12' type="password" placeholder='Confirm Password' /> */}
                                            <Form.Select aria-label="Default select example">
                                                <option>Select Country</option>
                                                <option value="1">India</option>
                                                <option value="2">United States</option>
                                                <option value="3">Australia</option>
                                            </Form.Select>
                                        </div>
                                        <input type="submit" value="SignUp" onClick={submit} />
                                    </form>
                                </div>
                                <div className='slice_signUp_form_foot'>
                                    {/* <Link to="/login">Login</Link> */}
                                    {/* <a href="/">Forget Password ?</a> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
