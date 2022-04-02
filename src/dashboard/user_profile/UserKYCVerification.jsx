import React, { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faCircleCheck,faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import Header from '../common/Header'

import SideNavbar from '../common/SideNavbar'
export default function UserKYCVerification() {
  const [document, setDocument] = useState("")
  const [selectedDoc, setSelectedDoc] = useState(false)

  const [frontFile, setFrontFile] = React.useState("");
  const [backFile, setBackFile] = React.useState("");
  const [selfieFile, setSelfieFile] = React.useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectDocFile =(e)=>{
    setDocument(e.target.value)
    setSelectedDoc(true)
  }


  function handleUploadFront(event) {
    setFrontFile(event.target.files[0].name);
    //  console.log(event.target.files[0].name)
    
  }

  function handleUploadBack(event) {
    setBackFile(event.target.files[0].name);
    // console.log(event.target.files[0].name)
  }

  function handleUploadSelfie(event) {
    setSelfieFile(event.target.files[0].name);
    // console.log(event.target.files[0].name)
  }

console.log(frontFile+ " " + backFile + " " + selfieFile)
  return (
  
    <>
      <Header />
          <div className="sideNav_section">
                   <SideNavbar/>
                </div>
      <section className='slice_user_kyc_varification'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={8} md={12}>
              <div className="kyc_varification_div">
                <div className="head">
                  <div>Scan Your ID/Password Number</div>
                </div>

                <div className="kyc_varification_fields">
                  <div className="select_document_div">
                    <select name="" id="" onChange={selectDocFile}>
                      <option value="">Select Your Document </option>
                      <option value="Aadhar Card">Aadhar Card</option>
                      <option value="Pan Card">Pan Card</option>
                      <option value="Voter Id Card">Voter Id Card</option>
                    </select>
                  </div>
                  {selectedDoc ? <div className="selected_document_div">
                    <input type="text" placeholder=  {`Enter ${document} Number`} />
                  </div> 
                  : " " }
                  
          
                  <div className="upload_doucment_div">
                    <div className="head">
                      <div>Upload Your ID/Password</div>
                    </div>
                    <div className="upload_file mt-2">
                      <Row>
                        <Col lg={4}>
                          <p>Front</p>
                          <div className="front">
                            <label for="file-upload" className="custom-file-upload">+</label>
                            <input id="file-upload"  type="file" style={{ display: "none" }} onChange={handleUploadFront} />
                            
                          </div>

                          <p>{frontFile}</p>
                        </Col>
                        <Col lg={4}>
                          <p>Back</p>
                          <div className="back">
                            <label for="file-upload" className="custom-file-upload">+</label>
                            <input id="file-upload"  type="file" style={{ display: "none" }} onChange={handleUploadBack} />
                            
                            

                          </div>
                          <p>{backFile}</p>
                        </Col>
                        <Col lg={4}>
                          <p>Selfie</p>
                          <div className="selfie">
                             <label for="file-upload" className="custom-file-upload">+</label>
                            <input id="file-upload" type="file" style={{ display: "none" }} onChange={handleUploadSelfie} />
                            
                          </div>
                          <p>{selfieFile}</p> 
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div className="warning_msg">
                                    <div className="icon"><FontAwesomeIcon icon={faCircleExclamation} /></div>
                                    <p>Upload your selfie with current date and signature on blank page</p>
                                </div>
                  <div className="kyc_varification_btn">
                    <button className='done_btn' onClick={handleShow}>Done</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* ===============successful modal start================== */}
        <Modal show={show} onHide={handleClose}>

          <Modal.Body>
            <Container fluid>
              <Row>
                <Col lg={12}>
                  <div className="success_msg_div">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <h5>Congratulations Your KYC Approved</h5>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>

        </Modal>
        {/* ===============successful modal end================== */}
      </section>




    </>
  )
}

