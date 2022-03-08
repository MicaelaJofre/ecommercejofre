import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBill1, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './Cards.css'

const Cards = () => {
    return (
        <section className='containerCards'>
            <article className='containerOptions'>
                <span>
                    <a><FontAwesomeIcon icon={faCreditCard} /></a>
                </span>
                <div>
                    <h2>Hasta 3 cuotas sin interés</h2>
                    <a href="">Ver promociones bancarias</a>
                </div>
            </article>
            <article className='containerOptions close'>
                <span>
                    <a><FontAwesomeIcon icon={faCreditCard} /></a>
                </span>
                <div>
                    <h2>Tarjeta de débito</h2>
                    <a href="">Ver más</a>
                </div>
            </article>
            <article className='containerOptions close'>
                <span>
                    <a ><FontAwesomeIcon icon={faMoneyBill1}  /></a>
                </span>
                <div>
                    <h2>Efectivo</h2>
                    <a href="">Ver más</a>
                </div>
            </article>
            <article className='containerOptions'>
                <p>|</p>
                <span>
                    <a><FontAwesomeIcon icon={faCirclePlus} /></a>
                </span>
                <div>
                    <h2>Más medios de pago</h2>
                    <a href="">Ver todos</a>
                </div>
            </article>
        </section>
    )
}

export { Cards }