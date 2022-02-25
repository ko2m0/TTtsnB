import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import Audio from './audioTrack'

function HeroSection() {
    return (
        <div className='hero-container clearfix'>
            <video src="/videos/TTtsnB_short3.mp4" autoPlay loop muted/>
            <h1>The Thing that Should Not Be</h1>
            <p>from the album "Master of Puppets"</p>
                <div className='hero-btns'>
                    <Link to={{ pathname: "https://www.metallica.com/store/music/master-of-puppets-remastered---3-cd-expanded-edition/ULCRJW_T.html?cgid=Vinyl%20and%20CDs#prefn1=color&prefv1=Master+of+Puppets&start=1"}} target="_blank">
                    <span className='k-btn trescolor-bg albus-txt txt-bigger tres-hover' >Buy the Album</span>
                    </Link>
                        <a href="" target="_blank" rel='noreferrer'>
                    
                        </a>
                    <Link to={{ pathname: "https://www.youtube.com/watch?v=qgeSScjSU7U"}} target="_blank">
                    <span className='k-btn trescolor-bg albus-txt txt-bigger tres-hover' buttonStyle="btn--primary" buttonSize='btn--large'>Watch the video</span>
                    </Link>
                </div>
                <div className='k-hide'>
                <Audio></Audio>
                </div>
                
        </div>
    )
}

export default HeroSection