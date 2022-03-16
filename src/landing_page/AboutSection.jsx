import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import About from '../assets/images/about.png'
export default function AboutSection() {
    return (
        <>
            <section className='slice_about_section'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div>
                                <Image className='w-100' src={About} alt="about" fluid />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='slice_about_content_div'>
                                <div className='slice_about_contents'>
                                    <h2>Head Title</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illum labore voluptatum facilis dolorem dicta a accusamus soluta tenetur fuga quis placeat odit quod, cum vero asperiores? Iure, cum earum.</p>
                                    <button>About Us</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
