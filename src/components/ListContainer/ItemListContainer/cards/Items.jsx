import React from 'react';
import { Link } from 'react-router-dom';
import { Count } from '../../../count/Count';
import "../ItemListContainer.css";
import { UseContextAllIn } from '../../../../context/CartContext';
import { useState } from 'react';

const Items = ({ prod}) => {


    //traemos la funcion del contexto
    const { addListCart} = UseContextAllIn();

    //contador
    const [count, setCount] = useState(null);

    const onAdd = (count) => {
        if (count !== 0) {
            setCount(count);
            addListCart({ ...prod, quantity: count });
        }
    }

    return (
        <div key={prod.id}>
            <div className="card">
                <div className="cardImage">
                    <span> {prod.discount}% descuento</span>
                    <Link to={`/detail/${prod.id}`}>
                        <img src={process.env.PUBLIC_URL + prod.img} alt={prod.name} />
                    </Link>
                </div>
                <div className="cardText">
                    <h2>{prod.name}</h2>
                    <p>${prod.price}</p>
                </div>
                <div className="cardsFees">
                    <h3>3 cuotas sin interés de ${prod.quota}</h3>
                </div>
                {
                    count
                        ? <Link to='/cart'>
                            <button>Ir al carrito</button>
                        </Link>
                        : <Count initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export { Items } 