import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
  return (
    <div className='k-container clearfix unuscolor-bg'>
        <div className="[ zeb-12 zeb-m-12 ]">
            <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
            <div className="[ zeb-10 zeb-m-12 ] flexxer align-center just-center k-padding-small wrapit">
                <div className="[ zeb-4 zeb-m-12 ]">
                    <div className="k-panel">
                        <h3 className='albus-txt k-padding-tiny txt-center'>About Metallica</h3>
                        <ul>
                            <li className='k-padding-tiny'>
                            <Link to="/" className="albus-txt">'Tallica official site</Link>
                            </li>
                            <li className='k-padding-tiny'>
                            <Link to="/" className="albus-txt">Spotify site</Link>
                            </li>
                            <li className='k-padding-tiny'>
                                <Link to="/" className="albus-txt">Youtube channel</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="[ zeb-4 zeb-m-12 ]">
                <div className="k-panel">
                        <h3 className='albus-txt k-padding-tiny txt-center'>About me</h3>
                        <ul>
                            <li className='k-padding-tiny'>
                            <Link to="/" className="albus-txt">'Tallica official site</Link>
                            </li>
                            <li className='k-padding-tiny'>
                            <Link to="/" className="albus-txt">Spotify site</Link>
                            </li>
                            <li className='k-padding-tiny'>
                                <Link to="/" className="albus-txt">Youtube channel</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="[ zeb-4 zeb-m-12 ]">
                <div className="k-panel">
                        <h3 className='albus-txt k-padding-tiny txt-center'>About this site</h3>
                        <ul>
                            <li className='k-padding-tiny'>
                            <Link to="/" className="albus-txt">'Tallica official site</Link>
                            </li>
                            <li className='k-padding-tiny'>
                            <Link to="/" className="albus-txt">Spotify site</Link>
                            </li>
                            <li className='k-padding-tiny'>
                                <Link to="/" className="albus-txt">Youtube channel</Link>
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
            <div className="[ zeb-3 zeb-m-12 ]">
                <div className="k-panel  flexxer align-center just-center">
                    <i className='fa-solid fa-user'>fb</i>
                </div>
            </div>
            <div className="[ zeb-3 zeb-m-12 ]">
                <div className="k-panel  flexxer align-center just-center">
                    <i className='fas fa-thumbs-up'>tw</i>
                </div>
            </div>
            <div className="[ zeb-3 zeb-m-12 ]">
                <div className="k-panel  flexxer align-center just-center">
                    <i className='fas fa-instagram'>git</i>
                </div>
            </div>
            <div className="[ zeb-3 zeb-m-12 ]">
                <div className="k-panel  flexxer align-center just-center">
                    <i className='fas fa-instagram'>dribbble</i>
                </div>
            </div>
        </div>
        <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
        </div>
        <div className="[ zeb-12 zeb-m-12 ]">
            <div className="k-panel">
                <h5 className='txt-center albus-txt'>2022 Made with by Kozmo</h5>
            </div>
        </div>


             
      
    </div>
  )
}

export default Footer