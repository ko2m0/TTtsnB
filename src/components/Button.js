import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ?
        buttonStyle :
        STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return ( <
        Link to='/' className='btn-mobile'>
        <button 
        className={'tres-hover albus-txt txt-bigger trescolor-bg k-btn btns ${checkButtonStyle} ${checkButtonSize}'}
        onClick={onClick}
        type = {type}
         >
          {children}
           </button> 
           </Link >
    )
}

export default Button