import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div>
            <a href=""><FontAwesomeIcon icon={faCartPlus} /></a>
            <span>0</span>
        </div>
    )
}

export { CartWidget }