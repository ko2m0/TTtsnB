import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection'
import Verse1 from '../Verse1';
import Footer from '../Footer';
import HeroLyrics from '../HeroLyrics';
import Verse2 from '../Verse2';
import Verse3 from '../Verse3';


function Lyrics() {
    return (
        <>
        <HeroLyrics />
        <Verse1 />
        <Verse2 />
        <Verse3 />
        <Verse2 />
        <Footer />
        </>
    )
}

export default Lyrics;