import React ,{useState} from 'react'
import { Container, Row, Col ,Accordion} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash,faCircleExclamation,faEye } from '@fortawesome/free-solid-svg-icons'
import Header from '../common/Header'

import SideNavbar from '../common/SideNavbar'

export default function User_Account_details () {
    const [togglePwd, setTogglePwd] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false);

    const handleCheckPassword =()=>{
        setTogglePwd(!togglePwd)
        setPasswordShown(!passwordShown)
    }
  return (
    <>
    <Header/>
 
                <div className="sideNav_section">
                   <SideNavbar/>
                </div>
        <section className='slice_user_account_details'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <div className="account_details_div">
                            <div className="head">
                                <div>Add your bank account to enable INR deposits and withdrawals</div>
                            </div>

                            <div className="text">
                                <div>Bank Account should belong to</div>
                            </div>
                            <div className="username">
                                <p>User Name</p>
                            </div>

                            <div className="account_number_fields">
                                <div className="account_number_div">
                                    <input type={passwordShown ? "text" : "password"} placeholder='Account Number' />
                                    <div className="icon" onClick={handleCheckPassword}>
                                    <FontAwesomeIcon icon={togglePwd ? faEye : faEyeSlash} />
                                    </div>
                                </div>

                                <div className="re-account_number_div">
                                    <input type="password" placeholder='Re-Enter Account Number' />
                                </div>

                                <div className="ifsc_code_div">
                                    <input type="text" placeholder='IFSC Code' />
                                </div>

                                <div className="warning_msg">
                                    <div className="icon"><FontAwesomeIcon icon={faCircleExclamation} /></div>
                                    <p>The above bank account must belong to you. Any other bank account will be rejected.</p>
                                </div>

                                <div className="account_details_btn">
                                    <button className='proceed_button'>Proceed</button>
                                </div>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
