import React from 'react';
import './Count.css';
import { useState } from 'react';

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

    return (
        <>
            <div className="countCards">
                <p onClick={takeProduct}>-</p>
                <p>{count}</p>
                <p onClick={addProduct}>+</p>
            </div>
            <button onClick={() => { if (stock !== 0) onAdd(count) }}>Agregar al carrito</button>
        </>
    )
}

export { Count }