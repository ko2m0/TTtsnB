import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container clearfix'>
            <video src="/videos/TTtsnB_short3.mp4" autoPlay loop muted/>
            <h1>The Thing that Should Not Be</h1>
            <p>from the album "Master of Puppets"</p>
            <div className='hero-btns'>
            <a href="https://www.metallica.com/store/music/master-of-puppets-remastered---3-cd-expanded-edition/ULCRJW_T.html?cgid=Vinyl%20and%20CDs#prefn1=color&prefv1=Master+of+Puppets&start=1" target="_blank">
                <Button className='btns' buttonStyle="btn--outline" buttonSize='btn--large'>Buy the Album</Button>
            </a>
            <a href="https://www.youtube.com/watch?v=qgeSScjSU7U" target="_blank">
                <Button className='btns' buttonStyle="btn--primary" buttonSize='btn--large'>Watch the video</Button>
            </a>
            </div>
        </div>
    )
}

export default HeroSection