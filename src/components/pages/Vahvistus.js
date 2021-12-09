import React from 'react';
import '../../App.css';
import img from '../../images/pyorat.JPG'

export default function Vahvistus() {
    return (
        <div className="vahvistus-container">
            <h1>VAHVISTUS</h1>
            <p>Kiitos yhteydenotosta! Palaamme pian asiaan.</p>
            <img className='kuva' src={img} alt="pyorat"></img>
            
        </div>
    )
}
