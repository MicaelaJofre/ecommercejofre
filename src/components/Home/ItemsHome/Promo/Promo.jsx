import React from 'react';
import './Promo.css';

const Promo = () => {
    return (
        <div className='containerPromo'>
            <div className="cardDeco">
                <img src={process.env.PUBLIC_URL + '/assets/image/ensaladeraRayas.png'} alt="Promo deco" />
                <div>
                    <span>Decuentos de hasta el 40%</span>
                </div>
            </div>
            <div className="cardDeco">
                <img src="" alt="Promo deco" />
                <div>
                    <span>Textil desde $1500</span>
                </div>
            </div>
        </div>
    )
}

export { Promo }