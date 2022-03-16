import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Hero from '../assets/images/hero.png'

export default function HeroSection() {
    return (
        <>
            <section className='slice_hero_section'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='slice_hero_content_div'>
                                <div className='slice_hero_contents'>
                                    <h2>Head Title</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illum labore voluptatum facilis dolorem dicta a accusamus soluta tenetur fuga quis placeat odit quod, cum vero asperiores? Iure, cum earum.</p>
                                    <button>Contact Us</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <Image className='w-100' src={Hero} alt="hero" fluid/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
