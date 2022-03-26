import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../common/Footer'
import Header from '../common/Header'
import WithdrawalPopup from '../components/WithdrawalPopup'
import AddFund from '../components/AddFund'

export default function Wallet() {
    const [show, setShow] = useState(false);
    const withDrawClose = () => setShow(false);
    const withDrawShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header />
            <section className='slice_wallet_section'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="slice_transaction_history">
                                <h5>Transaction History</h5>
                                <ul>
                                    <li>
                                        <div className='transaction_history_details'>
                                            <div className='transaction_history_text'>
                                                Deposit
                                            </div>
                                            <div className='transaction_history_amount'>
                                                <div className='amount_text'>₹3,171</div>
                                                <div className='status'>REJECTED</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='transaction_history_details'>
                                            <div className='transaction_history_text'>
                                                Deposit
                                            </div>
                                            <div className='transaction_history_amount'>
                                                <div className='amount_text'>₹3,171</div>
                                                <div className='status completed'>Completed</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='transaction_history_details'>
                                            <div className='transaction_history_text'>
                                                Deposit
                                            </div>
                                            <div className='transaction_history_amount'>
                                                <div className='amount_text'>₹3,171</div>
                                                <div className='status'>REJECTED</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='transaction_history_details'>
                                            <div className='transaction_history_text'>
                                                Deposit
                                            </div>
                                            <div className='transaction_history_amount'>
                                                <div className='amount_text'>₹3,171</div>
                                                <div className='status completed'>Completed</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='transaction_history_details'>
                                            <div className='transaction_history_text'>
                                                Deposit
                                            </div>
                                            <div className='transaction_history_amount'>
                                                <div className='amount_text'>₹3,171</div>
                                                <div className='status'>REJECTED</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='transaction_history_details'>
                                            <div className='transaction_history_text'>
                                                Deposit
                                            </div>
                                            <div className='transaction_history_amount'>
                                                <div className='amount_text'>₹3,171</div>
                                                <div className='status completed'>Completed</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='transaction_history_details'>
                                            <div className='transaction_history_text'>
                                                Deposit
                                            </div>
                                            <div className='transaction_history_amount'>
                                                <div className='amount_text'>₹3,171</div>
                                                <div className='status'>REJECTED</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='transaction_history_details'>
                                            <div className='transaction_history_text'>
                                                Deposit
                                            </div>
                                            <div className='transaction_history_amount'>
                                                <div className='amount_text'>₹3,171</div>
                                                <div className='status'>REJECTED</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='transaction_history_details'>
                                            <div className='transaction_history_text'>
                                                Deposit
                                            </div>
                                            <div className='transaction_history_amount'>
                                                <div className='amount_text'>₹3,171</div>
                                                <div className='status completed'>Completed</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="slice_flat_wallet">
                                <div className='flat_wallet_head'>Flat Wallet</div>
                                <div className='flat_wallet_total_balance'>
                                    <div className='flat_wallet_total_title'>
                                        <div><FontAwesomeIcon icon={faWallet} /></div>
                                        <h5>Total Wallet Balance</h5>
                                    </div>
                                    <div className='flat_wallet_total_value'>
                                        <h5>20,00,000.00</h5>
                                        <div className='flat_wallet_total_value_text'>INR</div>
                                    </div>
                                </div>
                                <div className='flat_wallet_amount_comparison'>
                                    <ul>
                                        <li>
                                            <div className='wallet_amount_currency_value'>
                                                <div className='currency_name'>USD :</div>
                                                <div className='currency_value'> $20000</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='wallet_amount_currency_value'>
                                                <div className='currency_name'>INR :</div>
                                                <div className='currency_value'> ₹20,126,100</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flat_wallet_Btn'>
                                    <button className='withdraw_btn' onClick={withDrawShow}>Withdraw Funds</button>
                                    <button className='add_fund_btn' onClick={handleShow}>Add Funds</button>
                                </div>
                            </div>

                            <div className="slice_flat_wallet">
                                <div className='flat_wallet_head'>Slice Wallet</div>
                                <div className='flat_wallet_total_balance'>
                                    <div className='flat_wallet_total_title'>
                                        <div><FontAwesomeIcon icon={faWallet} /></div>
                                        <h5>Total Wallet Balance</h5>
                                    </div>
                                    <div className='flat_wallet_total_value'>
                                        <h5>20,00,000.00</h5>
                                        <div className='flat_wallet_total_value_text'>SLC</div>
                                    </div>
                                </div>
                                <div className='flat_wallet_amount_comparison'>
                                    <ul>
                                        <li>
                                            <div className='wallet_amount_currency_value'>
                                                <div className='currency_name'>USD :</div>
                                                <div className='currency_value'> $20000</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='wallet_amount_currency_value'>
                                                <div className='currency_name'>SLC :</div>
                                                <div className='currency_value'> 20,126,100</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flat_wallet_Btn'>
                                    <Link to="/" className='withdraw_btn'>Buy</Link>
                                    <Link to="/" className='add_fund_btn'>Sell</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <WithdrawalPopup show={show} handleClose={withDrawClose} />
            <AddFund show={show} handleClose={handleClose} />
            <Footer />
        </>
    )
}
