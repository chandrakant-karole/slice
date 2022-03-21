import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceCard from './sub_component/ServiceCard'

export default function ServiceSection() {
    return (
        <>
            <section className='slice_service_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='slice_service_head'>
                                <h2>Service</h2>
                                <hr />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ducimus impedit dolor id vel beatae asperiores cumque, soluta earum sapiente repellendus excepturi, veniam esse, dicta debitis ipsum numquam. Nihil, non!</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='my-4' lg={4}>
                            <ServiceCard />
                        </Col>
                        <Col className='my-4' lg={4}>
                            <ServiceCard />
                        </Col>
                        <Col className='my-4' lg={4}>
                            <ServiceCard />
                        </Col>
                        <Col className='my-4' lg={4}>
                            <ServiceCard />
                        </Col>
                        <Col className='my-4' lg={4}>
                            <ServiceCard />
                        </Col>
                        <Col className='my-4' lg={4}>
                            <ServiceCard />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
