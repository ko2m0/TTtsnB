import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCheckSquare, faCoffee)


function Footer() {
  return (
    <div className='k-container clearfix unuscolor-bg'>
        <div className="[ zeb-12 zeb-m-12 ]">
            <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
            <div className="[ zeb-10 zeb-m-12 ] flexxer align-center just-center k-padding-small wrapit">
            <div className="[ zeb-4 zeb-m-12 ]">
                <div className="k-panel">
                        <h3 className='trescolor-txt k-padding-tiny'>About me</h3>
                        <ul>
                            <li className='k-padding-tiny'>
                            <p className='albus-txt'>
                            I'm Kozmo, a Web/graphic Designer based in Morelia Mexico. <br />
                            I listen to Metallica since I was a kid. "..And Justice for all" is perhaps my fav Album.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="[ zeb-4 zeb-m-12 ]">
                    <div className="k-panel">
                        <h3 className='trescolor-txt k-padding-tiny'>About Metallica</h3>
                        <ul>
                            <li className='k-padding-tiny'>
                                <a href="https://www.metallica.com" target="_blank">
                            <p className="albus-txt">'Tallica official site</p>
                                </a>
                            </li>
                            <li className='k-padding-tiny'>
                                <a href="https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB" target="_blank">
                            <p className='albus-txt'>Listen in Spotify</p>
                            </a>
                            </li>
                            <li className='k-padding-tiny'>
                                <p className='albus-txt'>Youtube Channel</p>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="[ zeb-4 zeb-m-12 ]">
                <div className="k-panel">
                        <h3 className='trescolor-txt k-padding-tiny'>About this site</h3>
                        <ul>
                            <li className='k-padding-tiny'>
                            <p className="albus-txt">I Coded this site in Microsoft Visual Studio</p>
                            </li>
                            <li className='k-padding-tiny'>
                            <p className="albus-txt">Made in React Js.</p>
                            </li>
                            <li className='k-padding-tiny'>
                                <p className="albus-txt">Youtube channel</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
        </div>
        <div className="[ zeb-12 zeb-m-12 ]">
        <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
        <div className="[ zeb-10 zeb-m-12 ] flexxer align-center just-center  wrapit">
            <div className="[ zeb-3 zeb-m-3 ]">
                <div className="k-panel  flexxer align-center just-center">
                <a href="https://linkedin.com/in/kozmoromero" target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" className='trescolor-txt' size='2x' />
                </a>
                </div>
            </div>
            <div className="[ zeb-3 zeb-m-3 ]">
                <div className="k-panel  flexxer align-center just-center">
                <a href="https://twitter.com/kozmo_" target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-twitter" className='trescolor-txt' size='2x' />
                </a>
                </div>
            </div>
            <div className="[ zeb-3 zeb-m-3 ]">
                <div className="k-panel  flexxer align-center just-center">
                    <a href="https://github.com/ko2m0" target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-github" className='trescolor-txt' size='2x' />
                </a>
                </div>
            </div>
            <div className="[ zeb-3 zeb-m-3 ]">
                <div className="k-panel  flexxer align-center just-center">
                    <a href="https://www.dribbble.com/kozmo_" target="_blank">
                    <FontAwesomeIcon icon="fa-brands fa-dribbble" className='trescolor-txt' size='2x' />
                    </a>
                </div>
            </div>
        </div>
        <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
        </div>
        <div className="[ zeb-12 zeb-m-12 ]">
            <div className="k-panel">
                <h5 className='txt-center albus-txt'>Made with &hearts; by Kozmo in 2022</h5>
            </div>
        </div>


             
      
    </div>
  )
}

export default Footer