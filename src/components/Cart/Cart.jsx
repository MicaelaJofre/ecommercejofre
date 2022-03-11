import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStore } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = () => {
    return (
        <div className='containerCart'>
            <h2>Carrito de compras</h2>
            <table className='tableTotal'>
                <thead>
                    <tr >
                        <th>producto</th>
                        <th>cantidad</th>
                        <th>precio</th>
                        <th>subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td> <img src={process.env.PUBLIC_URL + "/assets/image/alfombraBano.jfif"} alt="" /></td>
                        <td>1</td>
                        <td>$2000</td>
                        <td>$2000</td>
                        <td><i><FontAwesomeIcon icon={faTrash} /> </i></td>
                    </tr>
                </tbody>
            </table>
            <article className="footerCart">
                <div className="store">
                    <i><FontAwesomeIcon icon={faStore} /> </i>
                    <span>Nuestro local</span>
                    <div className="address">
                        <p>showroom Cramer 1265 1º 5, Buenos Aires <br/>lunes a viernes de 10 a 16.00 hs.</p>
                    </div>
                </div>
                <div className="Total">
                    <div>
                        <p>Subtotal (sin envio)</p>
                        <span>$2000</span>
                    </div>
                    <p className='shipping'>Envío</p>
                    <hr />
                    <div>
                        <p>Total</p>
                        <span>$2000</span>
                    </div>
                    <p className='promoTotal'>O hasta 3 cuotas sin interés de $500</p>
                    <div className="totalButton">
                        <button>iniciar compra</button>
                        <a href="">Ver más productos</a>
                    </div>
                </div>
            </article>
        </div>
    )
}

export { Cart }