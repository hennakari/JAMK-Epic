import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Jätä yhteydenottopyyntö
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" 
                        placeholder="Sähköpostiosoitteesi" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Lähetä</Button>
                    </form>    
                </div>
            </section>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Tietoa meistä</h2>
                        <Link to='/kalusto'>Vuokrakalusto</Link>
                        <Link to='/ehdot'>Vuokrausehdot</Link>
                        <Link to='/tarinoita'>Tarinoita</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Ota yhteyttä</h2>
                        <Link to='/yhteystiedot'>Yhteystiedot</Link>
                        <Link to='/kartta'>Kartta</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Materiaalia</h2>
                        <Link to='/kuvia'>Kuvia</Link>
                        <Link to='/videot'>Videoita</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                    </div>
                </div>
            </div>
            <small className="website-rights">EPIC SandB © 2021</small>
        </div>      
    )
}

export default Footer
