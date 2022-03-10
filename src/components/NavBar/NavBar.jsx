import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ButtonHamburger } from './ButtonHamburger';
import { CartWidget } from "./CartWidget";


const NavBar = () => {

    const [activeClick, setClicked] = useState(false);
    
    const handleClick = () => {
        setClicked(!activeClick);
    }

    return (
        <div className='containerNav'>
            <nav className='nav'>
                <NavLink to='Home'><img src={process.env.PUBLIC_URL + '/assets/image/logo.png'} alt="logo empresarial" /></NavLink>
                <ul className={`${activeClick ? 'active' : ''} `}>
                    <li><NavLink to='category/Deco'>Deco</NavLink></li>
                    <li><NavLink to='category/Bazar'>Bazar</NavLink></li>
                    <li><NavLink to='category/Cuadros'>Cuadros</NavLink></li>
                    <li><NavLink to='category/Textil'>Textil</NavLink></li>
                    <li><NavLink to='category/Aromas'>Aromas</NavLink></li>
                </ul>
                
                <div className='icons'>
                    <div className="firstIcons">
                        <form action="">
                            <input type="text" />
                            <a href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                        </form>
                    </div>
                    <div className="firstIcons">
                        <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                    <div className='cartPlus'>
                        <NavLink to='cart'><CartWidget /></NavLink>
                    </div>
                    <div className={`iconsButton ${activeClick ? 'active' : ''} `}>
                        <button>Iniciar seción</button>
                    </div>
                </div>
                <ButtonHamburger activeClick={activeClick} handleClick={handleClick} />
            </nav>
            <div className={`bgDiv ${activeClick ? 'active' : ''} `}></div>
        </div>
    )
}

export { NavBar }