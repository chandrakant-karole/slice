import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    nav: true,
    items: 1,
    rewind: true,
    autoplay: false,
    slideBy: 1,
    dots: true,
    dotsEach: false,
    dotData: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    }
}
export default function RoadMap() {
    return (
        <>
            <section className='slice_roadMap_Section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='slice_roadMap_Head'>
                                <h2>RoadMap</h2>
                                <hr />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <OwlCarousel className='owl-theme' loop margin={10} {...options}>
                                    <div className='item'>
                                        <div className='slice_roadMap_mainDiv'>
                                            <div className='phase_date'>
                                                <h5>00 March 2022</h5>
                                            </div>
                                            <div className='phase_bars'>
                                                <div className='phase_main_bar'></div>
                                                <div className='phase_indication_bar'></div>
                                                <div className="phase_dot">
                                                    <div className="phase_innerDot"></div>
                                                </div>
                                            </div>
                                            <div className='phase_content'>
                                                <h3>Phase</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur in, ut necessitatibus accusantium porro.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <h4>2</h4>
                                    </div>
                                    <div className='item'>
                                        <h4>3</h4>
                                    </div>
                                    <div className='item'>
                                        <h4>4</h4>
                                    </div>
                                    <div className='item'>
                                        <h4>5</h4>
                                    </div>
                                    <div className='item'>
                                        <h4>6</h4>
                                    </div>
                                    <div className='item'>
                                        <h4>7</h4>
                                    </div>
                                    <div className='item'>
                                        <h4>8</h4>
                                    </div>
                                    <div className='item'>
                                        <h4>9</h4>
                                    </div>
                                    <div className='item'>
                                        <h4>10</h4>
                                    </div>
                                    <div className='item'>
                                        <h4>11</h4>
                                    </div>
                                    <div className='item'>
                                        <h4>12</h4>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
