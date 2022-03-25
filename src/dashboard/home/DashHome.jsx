import React from 'react'
import { Col, Container, Image, Row, Dropdown, DropdownButton, ProgressBar, Table, Tabs, Tab } from 'react-bootstrap'
import Header from '../common/Header'
import coin from '../../assets/images/coin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Footer from '../common/Footer'
export default function Home() {
    return (
        <>
            <Header />
            {/* Main Content Start */}
            <section className='slice_dashHome_section'>
                <Container fluid>
                    <Row>
                        <Col lg={6}>
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
                        </Col>
                        <Col lg={6}>
                            <div className="slice_token_price_details">
                                <div className='slice_token_tag my-2'>Bitcoin Price (BTC)</div>
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
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="slice_token_value_table">
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <th>Market Cap</th>
                                        <th>Fully Diluted Market Cap</th>
                                        <th>Volume 24h</th>
                                        <th>Circulating Supply</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="slice_market_cap_value">
                                                <div className='market_cap_numbers'>$1,092,802,291,158</div>
                                                <span className='market_cap_variation'><FontAwesomeIcon icon={faCaretUp} /> 1.94%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="slice_market_cap_value">
                                                <div className='market_cap_numbers'>$1,092,802,291,158</div>
                                                <span className='market_cap_variation'><FontAwesomeIcon icon={faCaretUp} /> 1.94%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="slice_market_cap_value">
                                                <div className='market_cap_numbers'>$1,092,802,291,158</div>
                                                <span className='market_cap_variation'><FontAwesomeIcon icon={faCaretUp} /> 1.94%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="slice_market_cap_value circulating_supply">
                                                <div className='market_cap_numbers'>18,992,443.00 BTC</div>
                                                <span className='market_cap_percentage'>90%</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                    <Row>
                        <div className='slice_buy_sell_section'>
                            <Tabs defaultActiveKey="buy" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="buy" title="Buy">
                                   <p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eaque.</p>
                                </Tab>
                                <Tab eventKey="sell" title="Sell">
                                   <p>2Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eaque.</p>
                                </Tab>
                            </Tabs>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* Main Content End */}
            <Footer />
        </>
    )
}
