import React from 'react';
import '../../App.css';
import { Button } from '../Button'
import img from '../../images/ride10.JPG'

export default function VarausSup() {
    return (
        <div className="varaa"> 
            <h1>Tee tiedustelu SUP-lautojen saatavuudesta, otamme sinuun 
                yhteyttä.</h1>
            <p>Voit myös tiedustella puhelimitse +358 40 749 6165.</p>
            <div className="varaa-container">
                <img src={img} alt="sup" height="20%" width="20%"></img>
                <p>Valitsemasi SUP-lauta</p>
                <p>Red Paddle Co Ride 10.8</p>
                <form className="form">
                    <input type="text" name="pvm" 
                    placeholder="Ajankohta" className="varaa-input"/><br></br>
                    <input type="text" name="aika" 
                    placeholder="Vuokrauksen kesto" className="varaa-input"/><br></br>
                    <input type="text" name="etunimi" 
                    placeholder="Etunimi" className="varaa-input"/><br></br>
                    <input type="text" name="sukunimi" 
                    placeholder="Sukunimi" className="varaa-input"/><br></br>
                    <input type="email" name="email" 
                    placeholder="Sähköpostiosoite" className="varaa-input"/><br></br>
                    <input type="text" name="puh" 
                    placeholder="Puhelinnumero" className="varaa-input"/><br></br>
                    <Button  to='/vahvistus' className='btns' 
                    buttonStyle='btn--varaa' buttonSize='btn--large'>
                    LÄHETÄ
                    </Button>                      
                </form>
            </div>    
        </div>
    );
}
