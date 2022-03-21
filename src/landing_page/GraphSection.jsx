import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Graph from '../assets/images/graph-bg.png' 
export default function GraphSection() {
    return (
        <>
            <section className='slice_graphSection'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='slice_graph_content_div'>
                                <div className='slice_graph_contents'>
                                    <h2>Head Title</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illum labore voluptatum facilis dolorem dicta a accusamus soluta tenetur fuga quis placeat odit quod, cum vero asperiores? Iure, cum earum.</p>
                                    <button>Contact Us</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <Image className='w-80' src={Graph} alt="hero" fluid/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
