import React from 'react';
import { Link } from 'react-router-dom';

function Buy() {
  return (
    <>
    <div className="k-container clearfix k-padding-big albus-bg">
        <div className="[ zeb-12 zeb-m-12 ]">
            <div className="[ zeb-1 zeb-m-12 ]">&nbsp;
            </div>
            <div className="[ zeb-10 zeb-m-12 ]">
                <div className="k-panel flexxer align-center just-around wrapit">
                    <div className="[ zeb-4 zeb-m-12 ]">
                        <div className="k-panel">
                            <ul className='txt-center quinquecolor-bg k-padding-small'>
                                <li>
                                    <figure>
                                        <img src="./images/hpbook.jpg" 
                                        style={{
                                            width: 201,
                                        }}
                                        />
                                    </figure>
                                </li>
                                <li>
                                <Link to={{ pathname: "" }} target="_blank">
                                    <span className='k-btn trescolor-bg tres-hover albus-txt'>Buy HP Lovecraft Books</span>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="[ zeb-4 zeb-m-12 ]">
                    <div className="k-panel">
                            <ul className='txt-center quinquecolor-bg k-padding-small'>
                                <li>
                                    <figure>
                                        <img src="./images/metTshirt2.png" alt=""
                                        style={{
                                            width: 301,
                                        }} />
                                    </figure>
                                </li>
                                <li>
                                    <Link to={{ pathname: "" }} target="_blank">
                                    <span className='k-btn trescolor-bg tres-hover albus-txt'>Buy Metallica merch</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="[ zeb-4 zeb-m-12 ]">
                    <div className="k-panel">
                            <ul className='txt-center quinquecolor-bg k-padding-small'>
                                <li>1</li>
                                <li>Buy me a Beer!</li>
                                <li>3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="[ zeb-1 zeb-m-12 ]">&nbsp;
            </div>
        </div>
    </div>
    </>
  )
}

export default Buy