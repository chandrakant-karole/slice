import React from 'react'
import { Container, Row, Col,Table } from 'react-bootstrap'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'

export default function Transaction_history() {
    return (
        <>
            <Header />
            <div className="sideNav_section">
               <SideNavbar/>
            </div>


            <div className="transaction_history_section">
                <Container>
                    <Row>
                        <Col lg={12}>
                        <h5 className='mt-4'>Transactions</h5>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            
                            <div className="transaction_history_content">
                                <div className="transaction_history_title">
                                    <h6>All Buy Transactions</h6>
                                </div>

                                <div className="transaction_history_table">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                
                                                <td><div className="head">Token Name</div></td>
                                                <td><div className="head">Date</div></td>
                                                <td><div className="head">Quantity</div></td>
                                                <td><div className="head">Price</div></td>
                                                <td><div className="head">Total</div></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                              <td><div className="name">SliceLedger</div></td>
                                              <td><div className="date">20-Feb-2022</div></td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>
                                            <tr>
                                            <td><div className="name">SliceLedger</div></td>
                                              <td><div className="date">20-Feb-2022</div></td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>
                                            <tr>
                                            <td><div className="name">SliceLedger</div></td>
                                              <td><div className="date">20-Feb-2022</div></td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            
                            <div className="transaction_history_content">
                                <div className="transaction_history_title">
                                    <h6>All Sell Transactions</h6>
                                </div>

                                <div className="transaction_history_table">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                
                                                <td><div className="head">Token Name</div></td>
                                                <td><div className="head">Date</div></td>
                                                <td><div className="head">Quantity</div></td>
                                                <td><div className="head">Price</div></td>
                                                <td><div className="head">Total</div></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                              <td><div className="name">SliceLedger</div></td>
                                              <td><div className="date">20-Feb-2022</div></td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>
                                            <tr>
                                            <td><div className="name">SliceLedger</div></td>
                                              <td><div className="date">20-Feb-2022</div></td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>
                                            <tr>
                                            <td><div className="name">SliceLedger</div></td>
                                              <td><div className="date">20-Feb-2022</div></td>
                                              <td><div className="quantity">500</div></td>
                                              <td><div className="price">₹36100</div></td>
                                              <td><div className="total">₹36100</div></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

