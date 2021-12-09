import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] =useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu= () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <div className="navbar-logo-text">Epic Sups and Bikes</div>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' :'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Etusivu
                    </Link>
                    </li> 
                    <li className='nav-item'>
                    <Link to='/info' className='nav-links' onClick={closeMobileMenu}>
                        Info
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/hinnasto' className='nav-links' onClick={closeMobileMenu}>
                        Hinnasto
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/yhteystiedot' className='nav-links' onClick={closeMobileMenu}>
                        Yhteystiedot
                    </Link>
                    </li>     
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
