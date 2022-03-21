import React from 'react'
import AboutSection from './AboutSection'
import GraphSection from './GraphSection'
import HeroSection from './HeroSection'
import RoadMap from './RoadMap'
import ServiceSection from './ServiceSection'
export default function Home() {
    return (
        <>
        <HeroSection/>
        <AboutSection/>
        <ServiceSection/>
        <GraphSection/>
        <RoadMap/>
        </>
    )
}
