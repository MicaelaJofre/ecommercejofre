import React from 'react';
import { Link } from "react-router-dom";
import { UseContextAllIn } from "../../context/CartContext";

const ItemFormPayment = ({ handleInput, handleOrder, dataForm}) => {

    const { cartList, subTotal, shippingCart } = UseContextAllIn();

    return (
        <div className='containerFormPayment'>
            <Link to='/cart'>
                <p>Volver</p>
            </Link>
            <h2 className='paymentH2'>Datos de contacto</h2>
            <div className="formPay">
                <form
                    onSubmit={handleOrder}>
                    <input
                        type="text"
                        placeholder='Nombre'
                        id='name'
                        name='name'
                        value={dataForm.name}
                        onChange={handleInput}
                    />
                    <input type="text"
                        placeholder='Número de teléfono'
                        id='phone'
                        name='phone'
                        value={dataForm.phone}
                        onChange={handleInput}
                    />
                    <input type="email"
                        placeholder='Email'
                        name='email'
                        id='email'
                        value={dataForm.email}
                        onChange={handleInput}
                    />
                    <input type="email"
                        placeholder='Repetir email'
                        name='emailRep'
                        id='emailRep'
                        onChange={handleInput}
                    />
                    <button className='btnForm'>Terminar compra</button>
                </form>
                <div className="buys">
                    {cartList.map(prod => {
                        return (
                            <div className='tablePay' key={prod.id}>
                                <p>{prod.name}</p>
                                <p className='tablePayP'>${prod.price * prod.quantity}</p>
                            </div >

                        )

                    })}

                    <div className='payTotal'>
                        <p>Costo de envio ${shippingCart}</p>
                        <div className="payTotalH">
                            <h3 className='payFinal'>Total</h3>
                            <h4 className='payFinal'>${subTotal + shippingCart}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ItemFormPayment }