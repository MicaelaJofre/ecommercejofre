import React from 'react';
import './Count.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Count = ({ onAdd, initial, stock }) => {

    //contador
    const [count, setCount] = useState(initial);

    const addProduct = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const takeProduct = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    const addCart = () => {
        onAdd(count);
    }

    

    return (
        <>
            <div className="countCards">
                <p onClick={takeProduct}>-</p>
                <p>{count}</p>
                <p onClick={addProduct}>+</p>
            </div>
            <button onClick={addCart}>Agregar al carrito</button>
        </>
    )
}

export { Count }