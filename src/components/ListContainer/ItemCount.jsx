import React from 'react';
import "./ItemListContainer.css";
import jarHexagon from "../../assets/image/frasco01.jpg";
import { useState } from 'react';

const ItemCount = ( props ) => {
    
    const [count, setCount] = useState(props.initial);

    const addProduct = () => {
        if (count < props.stock) {
            setCount(count + 1);
        }
    }
    const takeProduct = () => {
        if (count > props.initial ) {
            setCount(count - 1);
        }
    }
    
    return (
        <div className='cardsContainer'>
            <div className="card">
                <div className="cardImage">
                    <span>30% descuento</span>
                    <img src={jarHexagon} alt="frascos" />
                </div>
                <div className="cardText">
                    <h2>FRASCO HERMETICO DE CERAMICA CON TAPA DE MADERA 10X10X13CM (3 COLORES)</h2>
                    <p>$2.350</p>
                </div>
                <div className="cardsFees">
                    <h3>3 cuotas sin interés de $966,67</h3>
                </div>
                <div className="countCards">
                    <p onClick={takeProduct}>-</p>
                    <p>{ count }</p>
                    <p onClick={addProduct}>+</p>
                </div>
                <button onClick={() => { if (props.stock !== 0) props.onAdd(count)}}>Agregar al carrito</button>
            </div>
        </div>
        
    )
}

export { ItemCount }