import React from 'react';
import './Promo.css';

const Promo = () => {
    return (
        <div className='containerPromo'>
            <div className="cardDecoPromo">
                {/* <img src={process.env.PUBLIC_URL + '/assets/image/decoHeader1.jpg'} alt="Promo deco Bazar" /> */}
                <div className='promo1'>
                    <span>Decuentos de hasta el 40%</span>
                </div>
            </div>
            <div className="cardDecoPromo">
                <img src={process.env.PUBLIC_URL + '/assets/image/decoHeader3.png'} alt="Promo deco textil" />
                <div>
                    <span>Textil desde $1500</span>
                </div>
            </div>
            <div className="cardDecoPromo">
                <img src={process.env.PUBLIC_URL + '/assets/image/decoHeader3.png'} alt="Promo deco textil" />
                <div>
                    <span>Textil desde $1500</span>
                </div>
            </div>
            <div className="cardDecoPromo">
                <img src={process.env.PUBLIC_URL + '/assets/image/decoHeader3.png'} alt="Promo deco textil" />
                <div>
                    <span>Textil desde $1500</span>
                </div>
            </div>
        </div>
    )
}

export { Promo }