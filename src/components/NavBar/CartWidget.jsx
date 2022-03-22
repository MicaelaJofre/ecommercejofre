import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; 
import { UseContextAllIn } from '../../context/CartContext';

const CartWidget = (e) => {

    const { cartList, elements } = UseContextAllIn();

    return (
        <div>
            <i ><FontAwesomeIcon icon={faCartPlus} /></i>
            {
                cartList.length > 0
                    ? <span>{ elements }</span>
                    : <></>
            }
        </div>
    )
}

export { CartWidget }