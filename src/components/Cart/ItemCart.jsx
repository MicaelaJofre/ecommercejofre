import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStore } from '@fortawesome/free-solid-svg-icons';
import { UseContextAllIn } from "../../context/CartContext";


function ItemCart() {

    const { cartList, emptyCard, deletProd, subTotal, shippingCart } = UseContextAllIn();


    return (
        <>
            <div className='titleTable'>
                <h4>Producto</h4>
                <h4>Cantidad</h4>
                <h4 className='visibility'>Precio</h4>
                <h4>Subtotal</h4>
                <button onClick={emptyCard}>Vaciar carrito</button>
            </div>
            {cartList.map(prod => {
                return (
                    <div className='tableTotal' key={prod.id}>
                        <img src={process.env.PUBLIC_URL + prod.img} alt={prod.name} />
                        <p>{prod.quantity}</p>
                        <p className='visibility'>${prod.price}</p>
                        <p>${prod.quantity * prod.price}</p>
                        <i onClick={(() => { deletProd(prod.id); })}><FontAwesomeIcon icon={faTrash} /> </i>
                    </div>

                );

            })}

            <article className="footerCart">
                <div className="store">
                    <i><FontAwesomeIcon icon={faStore} /> </i>
                    <span>Nuestro local</span>
                    <div className="address">
                        <p>showroom Cramer 325665 1º 5, Buenos Aires <br />lunes a viernes de 10 a 16.00 hs.</p>
                    </div>
                </div>
                <div className="Total">
                    <div>
                        <p>Subtotal (sin envio)</p>
                        <span>${subTotal}</span>
                    </div>
                    <div>
                        <p className='shipping'>Envío</p>
                        <span className='shipping'>${shippingCart}</span>
                    </div>
                    <hr />
                    <div>
                        <p>Total</p>
                        <span>${shippingCart + subTotal}</span>
                    </div>
                    <p className='promoTotal'>O hasta 3 cuotas sin interés de ${((shippingCart + subTotal) / 3).toFixed(2)}</p>
                    <div className="totalButton">
                        <Link to='/formPayment'>
                            <button>iniciar compra</button>
                        </Link>
                        <Link to='/category/deco'>
                            <p>Ver más productos</p>
                        </Link>
                    </div>
                </div>
            </article>
        </>


    );
}

export { ItemCart }