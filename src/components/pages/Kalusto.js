import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import img from '../../images/lillijavenla2.png';
import img4 from '../../images/tjpyora.jpg';

export default function Kalusto() {
    return (
        <div className='cards'>
            <h1 className="kalusto">KALUSTO</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={img4}
                            text="Vuokrakalustoomme kuuluu TREK Farley 5 läskipyöriä, 
                            koko M (2 kpl) ja koko L (2 kpl). TREK-pyörä kulkee vaivattomasti 
                            niin sohjossa kuin hiekalla ja ylittää sekä juuret että kivet 
                            vakaasti tuhtien ja leveiden renkaiden ansiosta.
                            Lisäksi pienikokoisempi kuski voi vuokrata mainion FELT blaa 
                            blaa pyörän, koko XS (1 kpl). FELT on laadukas fatbike, 
                            joka kulkee ketterästi maastossa tai yhtä hyvin maantiellä.
                            Pyörämme eivät ole sähköavusteisia, mikä antaa kuljettajalle 
                            aidon ajamisen ilon."
                            label="VARAA FATBIKE"
                            path="/bike"
                        />
                        <CardItem 
                            src={img}
                            text="Vuokralle tarjotaan kahta mainiota SUP-lautaa. Näille 
                            laudoille mahtuu hyvin vaikka kaverikin kyytiin. Red Paddle Co. 
                            Ride 10.8 SUP lauta on suunniteltu liukumaan helposti tasaisessa 
                            vedessä ja kantamaan raskaampaakin purjehtijaa. Kantavuus on 120kg.
                            Toinen vuokralautamme on Red Paddle Co. 10.8 Activ, joka on 
                            aavistuksen paksumpi ja leveämpi lauta ja soveltuu mm.joogaan, 
                            pilatekseen tai vaikkapa venyttelyyn vetten päällä. Kantavuus 120kg."
                            label="VARAA SUP-LAUTA"
                            path="/sup"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
