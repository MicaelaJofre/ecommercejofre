import React from 'react';
import './NavBar.css';

const ButtonHamburger = (props) => {
    return (
        <div
            onClick={props.handleClick}
            className={`nav-icon-5 ${props.activeClick ? 'open' : ''} `}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export { ButtonHamburger }