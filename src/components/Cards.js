import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img3 from '../images/hjajo.jpg'
import img4 from '../images/vjooga.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Valitse vauhdikas Fatbike-retki epätasaisessa maastossa 
                tai rauhallinen SUP-lautailu kimmeltävällä järvellä.  
                </h1>
            <h1>Vuokraamme laadukkaat välineet molempiin!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={img3}
                            text="Uhmaa kivikkoisia polkuja ja nauti maastopyöräilystä 
                            laadukkaalla läskipyörällämme"
                            label="Lue lisää"
                            path="/bike"
                        />
                        <CardItem 
                            src={img4}
                            text="Virkisty vesillä ja tunne laineiden liplatus suplautasi alla. 
                            Oletko koskaan joogannut veden päällä?"
                            label="Lue lisää"
                            path="/sup"
                        />
                    </ul>
                </div>
            </div>   
        </div>
    );
}

export default Cards;
