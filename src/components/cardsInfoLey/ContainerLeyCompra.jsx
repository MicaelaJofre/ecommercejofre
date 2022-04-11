import React from 'react';
import './containerLeyCompra.css';

const ContainerLeyCompra = () => {
    return (
        <div className='containerLeyCompra'>
            <div className='cancell'>
                <p>¿Te arrepentiste de comprar?</p>
                <p className='link'>Cómo cancelar una compra</p>
            </div>
            <div className='rules'>
                <p>¿Conocés las normas que protegen tus compras?</p>
                <p className='link'>Contratos de adhesión - Ley Nº 24.240 de Defensa del Consumidor</p>
            </div>
        </div>
    )
}

export { ContainerLeyCompra }