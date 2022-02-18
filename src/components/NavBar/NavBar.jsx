import React from 'react';
import './NavBar.css';
import logo from '../../assets/image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return (
        <div className='containerNav'>
            <nav className='nav'>
                <a href=""><img src={logo} alt="logo empresarial" /></a>
                <ul>
                    <li><a href=''>Deco</a></li>
                    <li><a href=''>Bazar</a></li>
                    <li><a href=''>Cuadros</a></li>
                    <li><a href=''>Textil</a></li>
                    <li><a href=''>Aromas</a></li>
                </ul>
                <div className='icons'>
                    <a href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                    <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href=""><FontAwesomeIcon icon={faCartPlus} /></a>
                    <button>Iniciar seción</button>
                </div>
            </nav>
        </div>
    )
}

export { NavBar }