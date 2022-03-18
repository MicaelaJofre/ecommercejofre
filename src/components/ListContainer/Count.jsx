import React from 'react';
import './Count.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//boton para ir al carrito
const BtnCart = () => {
    return (
        <Link to= '/cart'>
            <button>Ir al carrito</button>
        </Link>
    )
}

// boton para agregar al carrito
const BtnCount = ({ addCart, onAdd, count, stock })=>{
    return (
        <button onClick={() => { if (stock !== 0) { onAdd(count); addCart()} }}>Agregar al carrito</button>
    )
}

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


    //estado del boton
    const [buttonType, setButtonType] = useState('button');

    const addCart = () => {
        setButtonType('input');
    }

    return (
        <>
            <div className="countCards">
                <p onClick={takeProduct}>-</p>
                <p>{count}</p>
                <p onClick={addProduct}>+</p>
            </div>
            {
                buttonType === 'button'
                    ? <BtnCount addCart={addCart} onAdd={onAdd} count={count} stock={stock} />
                    : <BtnCart  />
            }
        </>
    )
}

export { Count }