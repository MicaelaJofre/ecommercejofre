import './Cart.css';
import { Link } from 'react-router-dom';
import { ItemCart } from './ItemCart';
import { UseContextAllIn } from "../../context/CartContext";

const Cart = () => {

    const { cartList } = UseContextAllIn();

    return (
        <div className='containerCart'>
            <h2>Carrito de compras</h2>
            
            {
                cartList.length > 0
                    
                    ? <ItemCart />  
                    
                    : <div className='emptyCart'>
                        <h3>No hay productos en el carrito</h3>
                        <Link to='/category/deco'>
                            <button>Volver a comprar</button>
                        </Link>
                    </div> 

            }
            
            
        </div>
        

    )
}

export { Cart }