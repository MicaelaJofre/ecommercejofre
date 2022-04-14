import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Count } from '../../../count/Count';
import { UseContextAllIn } from '../../../../context/CartContext';
import "../ItemListContainer.css";

const Items = ({ prod }) => {


    //traemos la funcion del contexto
    const { addListCart, cartList } = UseContextAllIn();
    
    let stockProd = prod.stock;

    //contador
    const [count, setCount] = useState(null);

    //stock
    const [stock, setStock] = useState(prod.stock);

    const onAdd = (count) => {
        if (count !== 0) {
            setCount(count);
            addListCart({ ...prod, quantity: count })
        }
    }

    const checkStock = () => {
        if(cartList.length > 0) {
            cartList.forEach(item => {
                if (item.id === prod.id) {
                    setStock(prod.stock - item.quantity)
                }
            });
        }
    }

    useEffect(() => {
        checkStock();
    }, [])

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
                        : <Count initial={stock > 0 ? 1 : 0} stock={stock} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export { Items } 