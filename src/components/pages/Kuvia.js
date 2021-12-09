import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';
import img1 from '../../images/hjsilta.jpg';
import img2 from '../../images/phyppy.jpg';
import img3 from '../../images/hkv.JPG';
import img4 from '../../images/porukka.JPG';
import img5 from '../../images/psup.JPG';
import img6 from '../../images/rpsup.JPG';
import img7 from '../../images/tetu.jpg';
import img8 from '../../images/tsmaki.jpg';

export default function Kuvia() {
    return (
        <div className='cards'>
            <h1 className="kuvia">KUVIA</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={img1}
                            text="Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
                        />
                        <CardItem 
                            src={img2}
                            text="Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={img3}
                            text="Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
                        />
                        <CardItem 
                            src={img4}
                            text="Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
                        />
                        <CardItem 
                            src={img5}
                            text="Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
                        />
                        <CardItem 
                            src={img6}
                            text="Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={img7}
                            text="Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
                        />
                        <CardItem 
                            src={img8}
                            text="Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
                        />
                    </ul>
                </div>
            </div>
        </div>
    );    
}
