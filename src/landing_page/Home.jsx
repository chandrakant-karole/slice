import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import GraphSection from './GraphSection'
import HeroSection from './HeroSection'
import RoadMap from './RoadMap'
import ServiceSection from './ServiceSection'
import TeamSection from './TeamSection'
export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <GraphSection />
            <RoadMap />
            <TeamSection />
            <ContactSection />
            <Footer />
        </>
    )
}
