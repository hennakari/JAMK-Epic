import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';
import img1 from '../../images/FELT.JPG';
import img2 from '../../images/TREK.JPG';

export default function Bike() {
    return (
        <div className='bike'>
            <h1>FATBIKE -VALIKOIMAMME</h1>
            <p>Vuokrakalustoomme kuuluu TREK Farley 5 läskipyöriä, koko M (2 kpl) 
                ja koko L (2 kpl).<br></br> 
                TREK-pyörä kulkee vaivattomasti niin sohjossa kuin hiekalla ja ylittää 
                sekä juuret että kivet vakaasti tuhtien ja leveiden renkaiden ansiosta.</p>
            <p>Lisäksi pienikokoisempi kuski voi vuokrata mainion FELT blaa blaa pyörän, 
                koko XS (1 kpl).<br></br> FELT on kevyt mutta laadukas fatbike, joka 
                kulkee ketterästi maastossa tai yhtä hyvin maantiellä.
                Pyörämme eivät ole sähköavusteisia, mikä antaa kuljettajalle aidon 
                ajamisen ilon.</p>
                <p>Kokosuositukset:</p>
                <p>XS: pituus 145 -160 cm / M: pituus 168 - 178 cm / L: pituus 175-187 cm</p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={img1}
                            text="FELT bla-laa, KOKO XS"
                            label="Varaa"
                            path="/varaa-bike"
                        />
                        <CardItem 
                            src={img2}
                            text="TREK Farley 5, KOKO M"
                            label="Varaa"
                            path="/varaa-bike"
                        />
                        <CardItem 
                            src={img2}
                            text="TREK Farley 5, KOKO L"
                            label="Varaa"
                            path="/varaa-bike"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );    
}
