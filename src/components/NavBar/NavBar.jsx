import React, {useState} from 'react';
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
                <a href=""><img src={process.env.PUBLIC_URL + '/assets/image/logo.png'} alt="logo empresarial" /></a>
                <ul className={`${activeClick ? 'active' : ''} `}>
                    <li><a href=''>Deco</a></li>
                    <li><a href=''>Bazar</a></li>
                    <li><a href=''>Cuadros</a></li>
                    <li><a href=''>Textil</a></li>
                    <li><a href=''>Aromas</a></li>
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
                        <CartWidget/>
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