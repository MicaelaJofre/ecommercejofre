import React, {useState} from 'react';
import './NavBar.css';
import logo from '../../assets/image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ButtonHamburger } from './ButtonHamburger';


const NavBar = () => {

    const [activeClick, setClicked] = useState(false);
    
    const handleClick = () => {
        setClicked(!activeClick);
    }

    return (
        <div className='containerNav'>
            <nav className='nav'>
                <a href=""><img src={logo} alt="logo empresarial" /></a>
                <ul className={`${activeClick ? 'active' : ''} `}>
                    <li><a href=''>Deco</a></li>
                    <li><a href=''>Bazar</a></li>
                    <li><a href=''>Cuadros</a></li>
                    <li><a href=''>Textil</a></li>
                    <li><a href=''>Aromas</a></li>
                </ul>
                
                <div className='icons'>
                    <div className="firstIcons">
                        <a href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                        <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                    <div className='cartPlus'>
                        <a href=""><FontAwesomeIcon icon={faCartPlus} /></a>
                        <span>0</span>
                    </div>
                    <div className={`iconsButton ${activeClick ? 'active' : ''} `}>
                        <button>Iniciar seción</button>
                    </div>
                </div>
                <ButtonHamburger activeClick={activeClick} handleClick={handleClick} />
                <div className={`bgDiv ${activeClick ? 'active' : ''} `}></div>
            </nav>
        </div>
    )
}

export { NavBar }