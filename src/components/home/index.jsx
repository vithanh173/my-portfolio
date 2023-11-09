import React from 'react';
import HeroSection from '../HeroSection';
import Skills from '../Skills';
import AboutMe from '../AboutMe';
import Projets from '../Projects';
import Footer from '../Footer';


function Home() {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Skills />
            <Projets />
            <Footer />
        </>
    )
}

export default Home
