import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBill1, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './Cards.css'

const Cards = () => {
    return (
        <section className='containerCards'>
            <article className='containerOptions'>
                <span>
                    <i><FontAwesomeIcon icon={faCreditCard} /></i>
                </span>
                <div>
                    <h2>Hasta 3 cuotas sin interés</h2>
                    <p>Ver promociones bancarias</p>
                </div>
            </article>
            <article className='containerOptions close'>
                <span>
                    <i><FontAwesomeIcon icon={faCreditCard} /></i>
                </span>
                <div>
                    <h2>Tarjeta de débito</h2>
                    <p>Ver más</p>
                </div>
            </article>
            <article className='containerOptions close'>
                <span>
                    <i><FontAwesomeIcon icon={faMoneyBill1}  /></i>
                </span>
                <div>
                    <h2>Efectivo</h2>
                    <p>Ver más</p>
                </div>
            </article>
            <article className='containerOptions'>
                <p>|</p>
                <span>
                    <i><FontAwesomeIcon icon={faCirclePlus} /></i>
                </span>
                <div>
                    <h2>Más medios de pago</h2>
                    <p>Ver todos</p>
                </div>
            </article>
        </section>
    )
}

export { Cards }