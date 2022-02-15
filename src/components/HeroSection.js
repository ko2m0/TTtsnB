import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container clearfix'>
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>The Thing that Should Not Be</h1>
            <p>from the album "Master of Puppets"</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle="btn--outline" buttonSize='btn--large'>KJKJKJKJ</Button>
                <Button className='btns' buttonStyle="btn--primary" buttonSize='btn--large'>KOKO</Button>
            </div>
        </div>
    )
}

export default HeroSection