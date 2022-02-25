import React from 'react'
import '../../App.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection'
import Footer from '../Footer';
import Main from '../Main';
import HP_L from '../HP_L';
import Buy from '../Buy';
import audioTrack from '../audioTrack';

function Home() {
    return (
        <>
        <HeroSection />
        <audioTrack/>
        <Main />
        <HP_L /> 
        <Buy />   
        <Footer/>
        </>
    )
}

export default Home;