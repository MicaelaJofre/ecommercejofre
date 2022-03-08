import { Count } from '../../Count';
import "../ItemListContainer.css";

const Items = ({ prod, onAdd}) => {
    
    return (
        <div key={prod.id}>
            <div className="card">
                <div className="cardImage">
                    <span> {prod.discount}% descuento</span>
                    <img src={process.env.PUBLIC_URL + prod.img} alt={prod.name} />
                </div>
                <div className="cardText">
                    <h2>{prod.name}</h2>
                    <p>${prod.price}</p>
                </div>
                <div className="cardsFees">
                    <h3>3 cuotas sin interés de ${prod.quota}</h3>
                </div>
                <Count onAdd={onAdd} initial={1} stock={5}/> 
            </div>
        </div>
    )
}

export { Items }