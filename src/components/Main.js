import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom';
import audioTrack from './audioTrack';

function Main() {
return (
<>
    <div className="k-container clearfix albus-bg">
        <div className="[ zeb-12 zeb-m-12 ]">
            <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
            <div className="[ zeb-10 zeb-m-12 ]">
                <div className="k-panel k-padding-big">
                    <div className="[ zeb-6 zeb-m-12 ]">
                        <h3>
                            <i>The Thing That Should Not Be</i> is the third song of Metallica's third album, Master of
                            Puppets, released in 1986.
                        </h3>
                    </div>
                    <div className="[ zeb-6 zeb-m-12 ]">
                        <figure className='txt-center'>
                            <img src="images/Metallica-MoP-cover.jpg" alt="" />
                        </figure>

                    </div>


                </div>
                <div className="k-panel k-justify k-padding-small">
                    <div className="k-block k-padding-small">
                        <h2 className='k-right trescolor-txt'>Cosmic Horror Inspiration</h2>
                    </div>
                    <h4>
                        The lyrics of "The Thing That Should Not Be" seem to fit well with the H.P. Lovecraft Cthulhu
                        mythos, including lines such as "Great old one" which may be a reference to the Great Old Ones
                        often
                        appearing in Lovecraft's works, "Hybrid children watch the sea, Pray for father, roaming free"
                        which
                        may refer to the people of Innsmouth (a key location in the Cthulhu Mythos) and "Out from ruins
                        once
                        possessed, Fallen city, living death" a possible reference to Cthulhu himself as he resides in
                        R'lyeh (another key location in the Cthulhu Mythos).
                    </h4>
                    <div className="k-block k-right k-padding-small">
                        <Link to="/Lyrics">
                        <span className='k-btn trescolor-bg albus-txt txt-bigger tres-hover' buttonStyle="btn--outline" buttonSize='btn--large'>Check out the lyrics</span>
                        </Link>
                    </div>

                </div>
                <div className="k-panel k-padding-big">
                    <div className="[ zeb-12 zeb-m-12 ]">
                        <div className="flexxer align-center just-center wrapit">
                            <div className="[ zeb-5 zeb-m-12 ] flexxer">
                                <h4>
                                    The lines "Not dead which eternal lie/Stranger
                                    eons death may die" is a phrase referencing the couplet "That is not dead which can
                                    eternal lie.
                                    And
                                    with strange aeons even death may die." that appears in the fictional Necronomicon
                                    that
                                    Lovecraft
                                    references numerous times.
                                </h4>
                            </div>
                            <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
                            <div className="[ zeb-6 zeb-m-12 ]">
                                <figure className='txt-center'>
                                    <img src="images/cthulhu.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="k-panel k-padding-big">
                    <div className="[ zeb-12 zeb-m-12 ]">
                        <div className="flexxer align-center just-center wrapit">
                            <div className="[ zeb-6 zeb-m-12 ]">
                                <figure className='txt-center'>
                                    <img src="images/cthulhu2.png" alt="" />
                                </figure>
                            </div>
                            <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
                            <div className="[ zeb-5 zeb-m-12 ]">
                                <h4>
                                    The lines "Messenger of fear" and "Crawling Chaos" refer to Nyarlathotep,
                                    the messenger of the evil Outer Ones. The line "Cult has summoned" may refer to the
                                    Cult
                                    of
                                    Cthulhu
                                    and their quest to awaken their god.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="k-panel k-padding-big">
                    <div className="k-block k-padding-small">
                        <h2 className='k-right trescolor-txt'>Tuning</h2>
                    </div>
                    <div className="[ zeb-8 zeb-m-12 ]">
                        <h4 className='k-right'>
                            The studio recording is their first in D standard tuning; however, it is their only D-tuned
                            song
                            to be played live in D-flat tuning.
                        </h4>
                    </div>

                </div>
                <div className="k-panel k-padding-tiny">
                    <small>Text taken from <a
                            href="https://metallica.fandom.com/wiki/The_Thing_That_Should_Not_Be_(song)">The Metallica
                            Fandom</a></small>
                </div>
            </div>

            <div className="[ zeb-1 zeb-m-12 ]">&nbsp;</div>
        </div>

    </div>
</>
)
}

export default Main