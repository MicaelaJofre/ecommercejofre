import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div>
            <i><FontAwesomeIcon icon={faCartPlus} /></i>
            <span>0</span>
        </div>
    )
}

export { CartWidget }