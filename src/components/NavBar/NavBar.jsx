import React, { useState , useEffect} from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ButtonHamburger } from './ButtonHamburger';
import { CartWidget } from "./CartWidget";
import './NavBar.css';


const NavBar = () => {

    const [activeClick, setClicked] = useState(false);
    
    const handleClick = () => {
        setClicked(!activeClick);
    }

    useEffect(() => {
        const submenu = document.querySelector(".nav > ul").getElementsByTagName("li");
        for (let item of submenu) {
            item.addEventListener("click", () => {
                setClicked(false);
            })
        }

    }, [])

    return (
        <div className='containerNav'>
            <nav className='nav'>
                <NavLink to='Home'><img src={process.env.PUBLIC_URL + '/assets/image/logo.png'} alt="logo empresarial" /></NavLink>
                <ul className={`${activeClick ? 'active' : ''} `}>
                    <li><NavLink to='/prods'>Productos</NavLink></li>
                    <li><NavLink to='category/deco'>Deco</NavLink></li>
                    <li><NavLink to='category/bazar'>Bazar</NavLink></li>
                    <li><NavLink to='category/cuadros'>Cuadros</NavLink></li>
                    <li><NavLink to='category/textil'>Textil</NavLink></li>
                    <li><NavLink to='category/aromas'>Aromas</NavLink></li>
                </ul>
                
                <div className='icons'>
                    <div className="firstIcons">
                    </div>
                    <div className="firstIcons">
                        <a href="/"><FontAwesomeIcon icon={faEnvelope} /></a>
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
        </div>
    )
}

export { NavBar }