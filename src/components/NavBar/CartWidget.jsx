import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; 
import { UseContextAllIn } from '../../context/CartContext';
import { useState, useEffect } from 'react';

const CartWidget = (e) => {

    const { cartList } = UseContextAllIn();
    const [totalIcon, setTotalIcon] = useState(0)
    
    
    // contador del item del carrito
    useEffect(() => {
        const total = () => {
            let total= 0;
            cartList.forEach(prod => {
                total += prod.quantity;
            });
            setTotalIcon(total);
        }
        total();

    }, [cartList])
    

    return (
        <div>
            <i ><FontAwesomeIcon icon={faCartPlus} /></i>
            {
                cartList.length > 0
                    ? <span>{ totalIcon }</span>
                    : <></>
            }
        </div>
    )
}

export { CartWidget }