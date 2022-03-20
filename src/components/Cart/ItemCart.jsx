import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStore } from '@fortawesome/free-solid-svg-icons';
import { UseContextAllIn } from "../../context/CartContext";
import { useEffect, useState } from 'react';

const ItemCart = () => {

    const { cartList, emptyCard, deletProd } = UseContextAllIn();
    const [subTotal, setSubTotal] = useState(0);

    const shipping = 500;
    // calcular el subtotal
    useEffect(() => {
        const total = () => {
            let res = 0;
            cartList.forEach(prod => {
                res += prod.quantity * prod.price; 
            });
            setSubTotal(res);
        }
        total();
    }, [cartList])
    

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
                        <p>${ prod.quantity * prod.price}</p>
                        <i onClick={(() => { deletProd(prod.id) })}><FontAwesomeIcon icon={faTrash} /> </i>
                    </div >

                )

            })}

            < article className="footerCart" >
                <div className="store">
                    <i><FontAwesomeIcon icon={faStore} /> </i>
                    <span>Nuestro local</span>
                    <div className="address">
                        <p>showroom Cramer 1265 1º 5, Buenos Aires <br />lunes a viernes de 10 a 16.00 hs.</p>
                    </div>
                </div>
                <div className="Total">
                    <div>
                        <p>Subtotal (sin envio)</p>
                        <span>${ subTotal }</span>
                    </div>
                    <div>
                        <p className='shipping'>Envío</p>
                        <span className='shipping'>${ shipping }</span>
                    </div>
                    <hr />
                    <div>
                        <p>Total</p>
                        <span>${ shipping + subTotal }</span>
                    </div>
                    <p className='promoTotal'>O hasta 3 cuotas sin interés de ${ ((shipping + subTotal) / 3).toFixed(2)}</p>
                    <div className="totalButton">
                        <button>iniciar compra</button>
                        <a href="">Ver más productos</a>
                    </div>
                </div>
            </article >
        </>


    )
}

export { ItemCart }