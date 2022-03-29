import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
    
const Footer = () => {
    return (
        <article className='footer'>
        <div className="containerFooter">
            <div className='containerImage'>
                <Link to='/'><img src={process.env.PUBLIC_URL + '/assets/image/logo.png'} alt="" /></Link>
                <p>Ideas y proyectos pensados para tu hogar y tu oficina. Decoración, ambientación, eventos y mucho más... </p>
            </div>
            <ul className='footerNav'>
                <li><Link to='category/deco'>Deco</Link></li>
                <li><Link to='category/bazar'>Bazar</Link></li>
                <li><Link to='category/cuadros'>Cuadros</Link></li>
                <li><Link to='category/textil'>Textil</Link></li>
                <li><Link to='category/aromas'>Aromas</Link></li>
            </ul>
            <div className='footerIcons'>
                <div className='iconsFaceInst'>
                    <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className='footerInfo'>
                    <p>Tel: 1152724578</p>
                    <a href='/'>tiendaonline@be-lieve.com.ar</a>
                    <p>Paraguay 658 Caba Capital Federal</p>
                </div>
            </div>
            </div>
            <div className="footerName">
                <hr />
                <p>Desarrollado por Micaela Jofre</p>
            </div>
        </article>
    )
}

export { Footer }