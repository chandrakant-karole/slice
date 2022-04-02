import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'

import Header from '../common/Header'

import SideNavbar from '../common/SideNavbar'

export default function Feedback(){
  return (
    <>
        <Header/>
        <div className="sideNav_section">
               <SideNavbar/>
                </div>

                <div className="user_feedback_section">
                    <Container>
                      <Row className='justify-content-center'>
                          <Col lg={8}>
                             <div className="user_feedback_div">
                                 <div className="feedback_content">
                                     <div className="feedback_title">
                                         <h5>Feedback/Suggestions</h5>
                                     </div>

                                     <div className="feedback_text">
                                         <p>Tell Us What you love about Slice Ledger, Or what we could be doing Better</p>

                                     </div>

                                        <div className="feedback_msg_input">
                                            <textarea className='form-control' rows={6} placeholder='Write your feedback/suggestions'></textarea>
                                        </div>

                                        <div className="feedback_btn">
                                            <button className='submit_btn'>Submit</button>
                                        </div>
                                 </div>
                             </div>

                          </Col>
                      </Row>

                    </Container>
                </div>
    </>
  )
}

