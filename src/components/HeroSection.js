import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>EEPPISIÄ ELÄMYKSIÄ</h1>
            <p>Fatbike ja SUP-lautavuokrausta Keski-Suomessa</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                    to='info'
                >
                    LUE LISÄÄ
                </Button>
            </div>
        </div>
    );
}

export default HeroSection
