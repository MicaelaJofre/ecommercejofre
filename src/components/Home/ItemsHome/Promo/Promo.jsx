import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.css';

const Promo = () => {
    return (
        <div className='containerPromo'>
            <div className="cardDecoPromo">
                <img src={process.env.PUBLIC_URL + '/assets/image/decoPromo.jpg'} alt="Promo deco Bazar" />
                <div className="promoText">
                    <Link to='category/deco'><span>Decuentos de hasta el 35%</span></Link>
                </div>
            </div>
            <div className="cardDecoPromo">
                <img src={process.env.PUBLIC_URL + '/assets/image/textilPromo.jpg'} alt="Promo deco textil" />
                <div className="promoText">
                    <Link to='category/textil'><span>Textil desde $400</span></Link>
                </div>
            </div>
            <div className="cardDecoPromo">
                <img src={process.env.PUBLIC_URL + '/assets/image/bazarPromo.jpg'} alt="Promo deco textil" />
                <div className="promoText">
                    <Link to='category/bazar'><span>Gran surtido en bazar</span></Link>
                </div>
            </div>
            <div className="cardDecoPromo">
                <img src={process.env.PUBLIC_URL + '/assets/image/aromaPromo.jpg'} alt="Promo deco textil" />
                <div className="promoText">
                    <Link to='category/aromas'><span>Aromatizá todos tus ambientes</span></Link>
                </div>
            </div>
        </div>
    )
}

export { Promo }