import { useState } from 'react';
import "./ItemListContainer.css";

const Items = ({prod, onAdd, initial, stock}) => {

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
        <div key={prod.id}>
            <div className="card">
                <div className="cardImage">
                    <span> {prod.discount}% descuento</span>
                    <img src={prod.img} alt={prod.name} />
                </div>
                <div className="cardText">
                    <h2>{prod.name}</h2>
                    <p>${prod.price}</p>
                </div>
                <div className="cardsFees">
                    <h3>3 cuotas sin interés de ${prod.quota}</h3>
                </div>
                <div className="countCards">
                    <p onClick={takeProduct}>-</p>
                    <p>{count}</p>
                    <p onClick={addProduct}>+</p>
                </div>
                <button onClick={() => { if (stock !== 0) onAdd(count) }}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export { Items }