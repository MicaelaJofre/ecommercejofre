import React from 'react';
import { ContainerLeyCompra } from '../../../cardsInfoLey/ContainerLeyCompra';
import './Bannerinfo.css';

const Bannerinfo = () => {
    return (
        <>
            <div className='containerBanner'>
                <div className="cardBanner line">
                    <img src={process.env.PUBLIC_URL + '/assets/image/creditCards.png'} alt="" />
                    <h2>Pagá con tarjeta o en efectivo</h2>
                    <p>Con Mercado Pago, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!</p>
                </div>
                <div className="cardBanner line">
                    <img src={process.env.PUBLIC_URL + '/assets/image/enviado.png'} alt="" />
                    <h2>Envío rápido y seguro</h2>
                    <p>Elegí Mercado Envíos y seguí tu compra hasta que la recibas. Todos tus paquetes estarán protegidos.</p>
                </div>
                <div className="cardBanner">
                    <img src={process.env.PUBLIC_URL + '/assets/image/proteger.png'} alt="" />
                    <h2>Compra Protegida</h2>
                    <p>Te acompañamos hasta que recibas lo que compraste. Y si no es lo que esperabas, te devolvemos el dinero.</p>
                </div>
            </div>
            <div className='containerLeyBanner'>
                <ContainerLeyCompra />
            </div>
        </>
    )
}

export { Bannerinfo }