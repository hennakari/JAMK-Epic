import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';
import img1 from '../../images/ride10.JPG';
import img2 from '../../images/activ.JPG';

export default function Sup() {
    return (
        <div className='bike'>
            <h1>SUP-LAUTA-VALIKOIMAMME</h1>
            <p>Vuokralle tarjotaan kahta mainiota SUP-lautaa. Näille laudoille 
                mahtuu hyvin vaikka kaverikin kyytiin. Red Paddle Co. Ride 10.8 
                SUP-lauta on suunniteltu liukumaan helposti tasaisessa vedessä 
                ja kantamaan raskaampaakin purjehtijaa. Kantavuus 120kg.</p>
            <p>Toinen vuokralautamme on Red Paddle Co. 10.8 Activ, joka on 
                aavistuksen paksumpi ja leveämpi lauta ja soveltuu mm.joogaan, 
                pilatekseen tai vaikkapa venyttelyyn veden päällä. 
                Kantavuus 120kg.</p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={img1}
                            text="Red Paddle Co. Ride 10.8"
                            label="Varaa"
                            path="/varaa-sup"
                        />
                        <CardItem 
                            src={img2}
                            text="Red Paddle Co. Activ 10.8"
                            label="Varaa"
                            path="/varaa-sup"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );    
}
