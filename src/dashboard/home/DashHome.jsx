import React,{useState} from 'react'
import { Col, Container, Image, Row, Dropdown, DropdownButton, ProgressBar, Accordion, Table } from 'react-bootstrap'
import Header from '../common/Header'
import coin from '../../assets/images/coin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faWallet, faGauge, faUser
     ,faPenToSquare, faSliders, faArrowRightFromBracket,faMessage,faMoneyBillTransfer,faUserCheck,faFileInvoice,faUserXmark,faKey} from '@fortawesome/free-solid-svg-icons'

import ViewDetailsPopup from '../components/ViewDetailsPopup'
import { Link } from 'react-router-dom'
import SideNavbar from '../common/SideNavbar'



export default function Home() {
     // ==================== ViewDetailsPopup =======================
     const [viewDetails, setViewDetails] = useState(false);
     const viewDetailsClose = () => setViewDetails(false);
     const viewDetailsFundShow = () => setViewDetails(true);
    return (
        <>
            <Header />
            <div className="main-section">
                <div className="sideNav_section">
                    <SideNavbar/>
                </div>

                {/* Main Content Start */}
                <div className='slice_dashHome_section'>
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="slice_token_container">
                                    <div className="slice_token_details">
                                        <div className='token_details_head'>
                                            <Image src={coin} fluid />
                                            <h2>Slice Token</h2>
                                            <span>SLC</span>
                                        </div>
                                        <div className='token_details_head_info'>
                                            <div className='token_rank'>Rank #1</div>
                                            <div className='token_rank_coinTxt'>Coin</div>
                                            <div className='token_rank_watchTxt'>On 2,950,037 watchlists</div>
                                        </div>
                                    </div>
                                    <div className="slice_token_price_details">
                                        <div className='slice_token_tag my-2'>Slice Price (SLICE)</div>
                                        <div className='price_value my-2'>
                                            <h2>$57,542.01</h2>
                                            <div className='token_increment'><FontAwesomeIcon icon={faCaretUp} /> 1.40%</div>
                                        </div>
                                        <div className='compare_value my-2'>
                                            <div className='compare_token'>14.09 ETH</div>
                                            <div className='token_decrement'><FontAwesomeIcon icon={faCaretDown} /> 1.25%</div>
                                        </div>
                                        <div className='price_data my-2'>
                                            <div className='low_price_data'>Low:$56,108.35</div>
                                            <div className='price_data_progressBar'>
                                                <ProgressBar />
                                            </div>
                                            <div className='high_price_data'>High:$57,804.73
                                            </div>
                                            <div className='hour_data'>
                                                <DropdownButton
                                                    variant="outline-secondary"
                                                    title="24h"
                                                    id="input-group-dropdown-1"
                                                >
                                                    <Dropdown.Item href="#">24h Low / High</Dropdown.Item>
                                                    <Dropdown.Item href="#">1m Low / High</Dropdown.Item>
                                                    <Dropdown.Item href="#">1y Low / High</Dropdown.Item>
                                                </DropdownButton>
                                            </div>
                                        </div>
                                        <div className='slice_buy_sell_btn my-2'>
                                            <Link to="/" className='buy_btn'>Buy</Link>
                                            <Link to="/" className='sell_btn'>Sell</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                          
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className="slice_token_value_table">

                                    <div className="token_details">
                                        <div className="slice_market_cap_title">
                                            <p>Market Cap</p>
                                        </div>
                                        <div className="slice_market_cap_value">
                                            <div className='market_cap_numbers'>$1,092,802,291,158</div>
                                            <span className='market_cap_variation'><FontAwesomeIcon icon={faCaretUp} /> 1.94%</span>
                                        </div>
                                    </div>


                                    <div className="token_details">
                                        <div className="slice_market_cap_title">
                                            <p>Fully Diluted Market Cap</p>
                                        </div>
                                        <div className="slice_market_cap_value">
                                            <div className='market_cap_numbers'>$1,092,802,291,158</div>
                                            <span className='market_cap_variation'><FontAwesomeIcon icon={faCaretUp} /> 1.94%</span>
                                        </div>
                                    </div>


                                    <div className="token_details">
                                        <div className="slice_market_cap_title">
                                            <p>Volume 24h</p>
                                        </div>
                                        <div className="slice_market_cap_value">
                                            <div className='market_cap_numbers'>$1,092,802,291,158</div>
                                            <span className='market_cap_variation'><FontAwesomeIcon icon={faCaretUp} /> 1.94%</span>
                                        </div>
                                    </div>


                                    <div className="token_details">
                                        <div className="slice_market_cap_title">
                                            <p>Circulating Supply</p>
                                        </div>
                                        <div className="slice_market_cap_value circulating_supply">
                                            <div className='market_cap_numbers'>18,992,443.00 BTC</div>
                                            {/* <span className='market_cap_percentage'>90%</span> */}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="slice_market_value_graph">
                                    <div className="market_value_head">
                                        <h5>SLICE/INR RATE</h5>
                                    </div>
                                    <div className="market_graph">

                                    </div>
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            
                            <Col lg={6}>
                                <div className='slice_buy_sell_section'>
                                    <div className="slice_buy_sell_head">
                                        <h6>Buy</h6>
                                    </div>
                                    <ul className='slice_buy_list_ul'>
                                        <li className='slice_buy_list_li'>
                                            <div className='token_details'>
                                                <div className='token_name_details'>
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className='token_name'>
                                                        <span className='token_name_text'>Sliceledger</span>
                                                        <span className='token_name_date'>20-Feb-2022, 08:05 AM</span>
                                                    </div>
                                                </div>
                                                <div className='token_value_details'>
                                                    <div className='token_quantity'>
                                                        <span className='token_quantity_text'>Qty :</span>
                                                        <span className='token_quantity_value'> 500000</span>
                                                    </div>
                                                    <div className='token_price'>
                                                        <span className='token_price_text'>Price :</span>
                                                        <span className='token_price_value'> ₹36100</span>
                                                    </div>
                                                    <div className='token_total'>
                                                        <span className='token_total_text'>Total :</span>
                                                        <span className='token_total_value'> ₹36100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='slice_buy_list_li'>
                                            <div className='token_details'>
                                                <div className='token_name_details'>
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className='token_name'>
                                                        <span className='token_name_text'>Sliceledger</span>
                                                        <span className='token_name_date'>20-Feb-2022, 08:05 AM</span>
                                                    </div>
                                                </div>
                                                <div className='token_value_details'>
                                                    <div className='token_quantity'>
                                                        <span className='token_quantity_text'>Qty :</span>
                                                        <span className='token_quantity_value'> 500000</span>
                                                    </div>
                                                    <div className='token_price'>
                                                        <span className='token_price_text'>Price :</span>
                                                        <span className='token_price_value'> ₹36100</span>
                                                    </div>
                                                    <div className='token_total'>
                                                        <span className='token_total_text'>Total :</span>
                                                        <span className='token_total_value'> ₹36100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='slice_buy_list_li'>
                                            <div className='token_details'>
                                                <div className='token_name_details'>
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className='token_name'>
                                                        <span className='token_name_text'>Sliceledger</span>
                                                        <span className='token_name_date'>20-Feb-2022, 08:05 AM</span>
                                                    </div>
                                                </div>
                                                <div className='token_value_details'>
                                                    <div className='token_quantity'>
                                                        <span className='token_quantity_text'>Qty :</span>
                                                        <span className='token_quantity_value'> 500000</span>
                                                    </div>
                                                    <div className='token_price'>
                                                        <span className='token_price_text'>Price :</span>
                                                        <span className='token_price_value'> ₹36100</span>
                                                    </div>
                                                    <div className='token_total'>
                                                        <span className='token_total_text'>Total :</span>
                                                        <span className='token_total_value'> ₹36100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='slice_buy_list_li'>
                                            <div className='token_details'>
                                                <div className='token_name_details'>
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className='token_name'>
                                                        <span className='token_name_text'>Sliceledger</span>
                                                        <span className='token_name_date'>20-Feb-2022, 08:05 AM</span>
                                                    </div>
                                                </div>
                                                <div className='token_value_details'>
                                                    <div className='token_quantity'>
                                                        <span className='token_quantity_text'>Qty :</span>
                                                        <span className='token_quantity_value'> 500000</span>
                                                    </div>
                                                    <div className='token_price'>
                                                        <span className='token_price_text'>Price :</span>
                                                        <span className='token_price_value'> ₹36100</span>
                                                    </div>
                                                    <div className='token_total'>
                                                        <span className='token_total_text'>Total :</span>
                                                        <span className='token_total_value'> ₹36100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='slice_buy_sell_section'>
                                    <div className="slice_buy_sell_head">
                                        <h6>Sell</h6>
                                    </div>
                                    <ul className='slice_buy_list_ul'>
                                        <li className='slice_buy_list_li'>
                                            <div className='token_details'>
                                                <div className='token_name_details'>
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className='token_name'>
                                                        <span className='token_name_text'>Sliceledger</span>
                                                        <span className='token_name_date'>20-Feb-2022, 08:05 AM</span>
                                                    </div>
                                                </div>
                                                <div className='token_value_details'>
                                                    <div className='token_quantity'>
                                                        <span className='token_quantity_text'>Qty :</span>
                                                        <span className='token_quantity_value'> 500000</span>
                                                    </div>
                                                    <div className='token_price sell_text'>
                                                        <span className='token_price_text'>Price :</span>
                                                        <span className='token_price_value'> ₹36100</span>
                                                    </div>
                                                    <div className='token_total'>
                                                        <span className='token_total_text'>Total :</span>
                                                        <span className='token_total_value'> ₹36100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='slice_buy_list_li'>
                                            <div className='token_details'>
                                                <div className='token_name_details'>
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className='token_name'>
                                                        <span className='token_name_text'>Sliceledger</span>
                                                        <span className='token_name_date'>20-Feb-2022, 08:05 AM</span>
                                                    </div>
                                                </div>
                                                <div className='token_value_details'>
                                                    <div className='token_quantity'>
                                                        <span className='token_quantity_text'>Qty :</span>
                                                        <span className='token_quantity_value'> 500000</span>
                                                    </div>
                                                    <div className='token_price sell_text'>
                                                        <span className='token_price_text'>Price :</span>
                                                        <span className='token_price_value'> ₹36100</span>
                                                    </div>
                                                    <div className='token_total'>
                                                        <span className='token_total_text'>Total :</span>
                                                        <span className='token_total_value'> ₹36100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='slice_buy_list_li'>
                                            <div className='token_details'>
                                                <div className='token_name_details'>
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className='token_name'>
                                                        <span className='token_name_text'>Sliceledger</span>
                                                        <span className='token_name_date'>20-Feb-2022, 08:05 AM</span>
                                                    </div>
                                                </div>
                                                <div className='token_value_details'>
                                                    <div className='token_quantity'>
                                                        <span className='token_quantity_text'>Qty :</span>
                                                        <span className='token_quantity_value'> 500000</span>
                                                    </div>
                                                    <div className='token_price sell_text'>
                                                        <span className='token_price_text'>Price :</span>
                                                        <span className='token_price_value'> ₹36100</span>
                                                    </div>
                                                    <div className='token_total'>
                                                        <span className='token_total_text'>Total :</span>
                                                        <span className='token_total_value'> ₹36100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='slice_buy_list_li'>
                                            <div className='token_details'>
                                                <div className='token_name_details'>
                                                    <div className='token_image'>
                                                        <Image src={coin} fluid />
                                                    </div>
                                                    <div className='token_name'>
                                                        <span className='token_name_text'>Sliceledger</span>
                                                        <span className='token_name_date'>20-Feb-2022, 08:05 AM</span>
                                                    </div>
                                                </div>
                                                <div className='token_value_details'>
                                                    <div className='token_quantity'>
                                                        <span className='token_quantity_text'>Qty :</span>
                                                        <span className='token_quantity_value'> 500000</span>
                                                    </div>
                                                    <div className='token_price sell_text'>
                                                        <span className='token_price_text'>Price :</span>
                                                        <span className='token_price_value'> ₹36100</span>
                                                    </div>
                                                    <div className='token_total'>
                                                        <span className='token_total_text'>Total :</span>
                                                        <span className='token_total_value'> ₹36100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12}>
                                <div className='slice_transaction_head'>
                                    <h5>TRANSACTIONS HISTORY</h5>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="transaction_detail_table">
                                    <Table striped bordered hover size="sm">
                                        
                                        
                                    
                                        <tbody>
                                        <tr>
                                                <td><div className="title_head">No.</div></td>
                                                <td><div className="title_head">Transaction</div></td>
                                                <td><div className="title_head">Price</div></td>
                                                <td><div className="title_head">Status</div></td>
                                                <td><div className="title_head">Action</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="head">1</div></td>
                                                <td><div className='head'>Deposit</div></td>
                                                <td><div className='amount_text'>₹3,171</div></td>
                                                <td><div className='status completed'>Completed</div></td>
                                                <td><button onClick={viewDetailsFundShow}>View Details</button></td>
                                            </tr>
                                            <tr>
                                                <td><div className="head">2</div></td>
                                                <td><div className='head'>Deposit</div></td>
                                                <td><div className='amount_text'>₹3,171</div></td>
                                                <td> <div className='status'>REJECTED</div></td>
                                                <td><button onClick={viewDetailsFundShow}>View Details</button></td>
                                            </tr>
                                            <tr>
                                                <td><div className="head">3</div></td>
                                                <td><div className='head'>Deposit</div></td>
                                                <td><div className='amount_text'>₹3,171</div></td>
                                                <td><div className='status completed'>Completed</div></td>
                                                <td><button onClick={viewDetailsFundShow}>View Details</button></td>

                                            </tr>
                                            <tr>
                                                <td><div className="head">4</div></td>
                                                <td><div className='head'>Deposit</div></td>
                                                <td><div className='amount_text'>₹3,171</div></td>
                                                <td> <div className='status'>REJECTED</div></td>
                                                <td><button onClick={viewDetailsFundShow}>View Details</button></td>
                                            </tr>
                                            <tr>
                                                <td><div className="head">5</div></td>
                                                <td><div className='head'>Deposit</div></td>
                                                <td><div className='amount_text'>₹3,171</div></td>
                                                <td> <div className='status'>REJECTED</div></td>
                                                <td><button onClick={viewDetailsFundShow}>View Details</button></td>
                                            </tr>
                                            <tr>
                                                <td><div className="head">6</div></td>
                                                <td><div className='head'>Deposit</div></td>
                                                <td><div className='amount_text'>₹3,171</div></td>
                                                <td><div className='status completed'>Completed</div></td>
                                                <td><button onClick={viewDetailsFundShow}>View Details</button></td>
                                            </tr>
                                            <tr>
                                                <td><div className="head">7</div></td>
                                                <td><div className='head'>Deposit</div></td>
                                                <td><div className='amount_text'>₹3,171</div></td>
                                                <td><div className='status completed'>Completed</div></td>
                                                <td><button onClick={viewDetailsFundShow}>View Details</button></td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <ViewDetailsPopup show={viewDetails} handleClose={viewDetailsClose} />
                {/* Main Content End */}
            </div>



        </>
    )
}
