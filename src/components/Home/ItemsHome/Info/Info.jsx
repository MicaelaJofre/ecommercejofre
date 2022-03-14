import { Link } from 'react-router-dom';
import './Info.css';

const Info = () => {
    return (
        <div className='containerInfo'>
            <div className="cardInfo">
                <h2>• Usá agregar al carrito y agrupá tu compra y envío. Recibí todos nuestros productos en tu casa •</h2>
                <Link to='category/deco'>Ver productos</Link>
            </div>
        </div>
    )
}

export { Info }