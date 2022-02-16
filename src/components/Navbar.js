import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { MetLogoW } from './MetLogoW';


function Navbar() {
    const [click,
        setClick] = useState(false);
    const [button,
        setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return ( 
    <> 
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <MetLogoW 
                height="auto"
                width="150px"/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i
                    className={click
                    ? 'fas fa-times'
                    : 'fas fa-bars'}></i>
            </div>
            <ul
                className={click
                ? 'nav-menu active'
                : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Lyrics' className='nav-links' onClick={closeMobileMenu}>Lyrics</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Pics' className='nav-links' onClick={closeMobileMenu}>Pics</Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>My Github</Button>}
        </div>
    </nav>
     </>
  )
}

export default Navbar