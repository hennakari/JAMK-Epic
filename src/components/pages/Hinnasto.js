import React from 'react';
import '../../App.css';


export default function Hinnasto() {
    return (  
        <div className='hinnasto-container'>
            <h1>HINNASTO</h1><br></br>
                <div>
                    <div className='yht-teksti'>
                        <h2>Fatbike</h2><br></br>
                        <p>20 € / tunti</p>
                        <p>50 € / 3 tuntia</p>
                        <p>80 € / vuorokausi</p>
                    </div>
                    <div className='yht-teksti'>
                        <h2>SUP-lauta</h2><br></br>
                        <p>15 € / tunti</p>
                        <p>30 € / 3 tuntia</p>
                        <p>60 € / vuorokausi</p>
                    </div>
                </div>
        </div>
    );
}
