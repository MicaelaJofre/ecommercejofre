import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { Count } from "../../ListContainer/Count";
import { ContainerLeyCompra } from '../ContainerLeyCompra';

const ItemDetail = ({ item }) => {
    //contador
    const onAdd = (count) => {
        if (count !== 0) {
            console.log(count);
        }
    }
    return (
        <>
        <section className="containerDetail">
            <div className="detailImg">
                <p className='titleImg'>{ item.name}</p>
                <img src={process.env.PUBLIC_URL + item.img} alt="" />
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
                    <a href="">ver medios de pago</a>
                        <span>{item.shipping ? 'Envío gratis' : 'Entrega a acordar con el vendedor'}</span>
                </div>
                <hr />
                <p className='textCant'>Cantidad</p>
                    <Count initial={1} stock={5} onAdd={onAdd}/>
            </div>
        </section>
        <article>
            <ContainerLeyCompra/>
        </article>
        </>
    )
}

export { ItemDetail }