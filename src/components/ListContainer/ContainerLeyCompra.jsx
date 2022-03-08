import './containerLeyCompra.css';

const ContainerLeyCompra = () => {
    return (
        <div className='containerLeyCompra'>
            <div className='cancell'>
                <p>¿Te arrepentiste de comprar?</p>
                <a href="">Cómo cancelar una compra</a>
            </div>
            <div className='rules'>
                <p>¿Conocés las normas que protegen tus compras?</p>
                <a href="">Contratos de adhesión - Ley Nº 24.240 de Defensa del Consumidor</a>
            </div>
        </div>
    )
}

export { ContainerLeyCompra }