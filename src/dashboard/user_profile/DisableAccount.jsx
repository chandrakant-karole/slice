import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Header from '../common/Header'

import SideNavbar from '../common/SideNavbar'

const DisableAccount = () => {
  return (
    <>
    <Header/>
         <div className="sideNav_section">
                  <SideNavbar/>
                </div>

        <div className="disable_account_section">
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <div className="disable_account_div">
                            <div className="disable_head">
                                <h5>Suspicious activity?</h5>
                            </div>
                            <div className="disable_text">
                                <div className="title">
                                    <p>Please disable your account to secure your funds.</p>
                                    <p>Lorem ipsum dolor sit amet. Vel voluptatem itaque non tenetur nisi in esse dolores eum ducimus odit a voluptatem harum qui sint sapiente sit ducimus minima. Et ducimus odit a autem animi id omnis doloribus.</p>
                                </div>
                            </div>
                            <div className="disable_btn">
                                <button className='btn btn-danger'>Disable Your Account</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default DisableAccount