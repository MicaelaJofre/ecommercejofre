import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { ContainerLeyCompra } from '../../cardsInfoLey/ContainerLeyCompra';
import { Count } from "../../count/Count";
import{ UseContextAllIn } from '../../../context/CartContext';

const ItemDetail = ({ item }) => {
    
    //traemos la funcion del contexto
    const { addListCart, cartList } = UseContextAllIn();

    //contador
    const [count, setCount] = useState(null);

    //stock
    const [stock, setStock] = useState(item.stock);

    
    const onAdd = (count) => {
        if (count !== 0) {
            setCount(count);
            addListCart({ ...item, quantity: count });
        }
    }

    const checkStock = () => {
        
        if (cartList.length > 0) {
            cartList.forEach(prod => {
                if (prod.id === item.id) {
                    setStock(item.stock - prod.quantity)
                }
            });
        }
    }
    useEffect(() => {
        checkStock();
    }, [])
    


    return (
        <>
            <section className="containerDetail">
                <div className="detailImg">
                    <p className='titleImg'>{item.name}</p>
                    <img src={process.env.PUBLIC_URL + item.img} alt={item.name} />
                    <p>{item.description}</p>
                </div>
                <div className="detailInfo">
                    <div className="detailText">
                        <h2>{item.name}</h2>
                        <h3>${item.price}</h3>
                        <p className='textInfo'><span>3</span> cuotas sin interés de <span>${item.quota}</span></p>
                    </div>
                    <div className="detailIcons">
                        <i><FontAwesomeIcon icon={faMoneyBill1} /></i>
                        <i><FontAwesomeIcon icon={faCreditCard} /></i>
                        <span className='linkShipping'>ver medios de pago</span>
                        <span>{item.shipping ? 'Envío gratis' : 'Entrega a acordar con el vendedor'}</span>
                        <p>{stock > 0 ? `Stock disponible: ${stock}` : ''}</p>
                    </div>
                    <hr />
                    <p className='textCant'>Cantidad</p>
                    {
                        count
                            ? <Link to='/cart'>
                                <button>Ir al carrito</button>
                            </Link>
                            : <Count    initial={stock > 0 ? 1 : 0}
                                        stock={stock}
                                        onAdd={onAdd} />
                        
                    }
                </div>
            </section>
            <article>
                <ContainerLeyCompra />
            </article>
        </>
    )
}

export { ItemDetail }