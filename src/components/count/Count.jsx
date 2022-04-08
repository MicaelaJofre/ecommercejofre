import React from 'react';
import { useState } from 'react';
import './Count.css';



const Count = ({ onAdd, initial, stock }) => {


    //contador
    const [count, setCount] = useState(initial);

    const addProduct = () => {
        count < stock && setCount(count + 1);
    }

    const takeProduct = () => {
        count > initial && setCount(count - 1);
    }

    const addCart = () => {
        onAdd(count);
    }

    

    return (
        <>
            <div className="countCards">
                {
                    count === 0
                        ? <p className='stock'>Sin stock</p>
                        :
                        <>
                            <p onClick={takeProduct}>-</p>
                            <p>{count}</p>
                            <p onClick={addProduct}>+</p>
                        </>
                }
            </div>
            {
                count === 0
                    ? <p></p>
                    : <button onClick={addCart}>Agregar al carrito</button>
            }
            
        </>
    )
}

export { Count }