import React from 'react';
import '../../App.css';

export default function Info() {
    return (
        <div className='info-container'>
            <h1>INFO</h1>
                <div className='info-teksti'>
                    <p>Epic Sups and Bikes sijaitsee Suolahdessa Äänekoskella.</p>
                    <p>Vuokraamme läskipyöriä ympäri vuoden sekä kesäkaudella 
                        myös SUP-lautoja.</p>
                    <p>Välineet voi joko noutaa toimipisteeltämme tai sopia toimituksesta 
                        Keski-Suomen alueella erillistä lisäkorvausta vastaan. Äänekoskelle 
                        toimitamme maksutta.</p>
                    <p>Varaukset ja tiedustelut joko tämän nettisivun kautta tai 
                        puhelimitse: +358 40 749 6165</p>  
                    <p>Voit myös lähettää yhteydenottopyynnön etusivulla.</p>
                </div>
        </div>
    ) 
}
