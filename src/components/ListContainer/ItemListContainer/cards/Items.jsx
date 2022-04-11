import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Count } from '../../../count/Count';
import { UseContextAllIn } from '../../../../context/CartContext';
import "../ItemListContainer.css";

const Items = ({ prod }) => {


    //traemos la funcion del contexto
    const { addListCart, setStateStock } = UseContextAllIn();
    
    let stockProd = prod.stock;

    //contador
    const [count, setCount] = useState(null);

    const onAdd = (count) => {
        if (count !== 0) {
            setCount(count);
            prod.stock
                ? addListCart({ ...prod, quantity: count })
                : setStateStock(true);
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
                        : <Count initial={stockProd > 0 ? 1 : 0} stock={stockProd} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export { Items } 