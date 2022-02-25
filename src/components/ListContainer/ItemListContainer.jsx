import React from 'react';
import { ItemCount } from './ItemCount';
import "./ItemListContainer.css";


const ItemListContainer = () => {

    const onAdd = (count) => {
        if (count !== 0) {
            console.log(count);
        }
    }


    return(
        <div className='itemListContainer'>
            <aside className='asideDeco'>
                <h1>Decoración</h1>
                <p>10 resultados</p>
                <form className='formAsideDeco' action="">
                    <div>
                        <legend>Categorías</legend>
                        <div>
                            <input type='checkbox' />
                            <label htmlFor="">Jarrones y floreros</label>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <label htmlFor="">Adornos</label>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <label htmlFor="">Organizadores</label>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <label htmlFor="">Espejos</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <legend>Envío</legend>
                            <input type='checkbox' />
                            <label htmlFor="">Envío gratis</label>
                        </div>
                    </div>
                    <div>
                        <legend>Precio</legend>
                        <div>
                            <input type='checkbox' />
                            <label htmlFor="">Hasta $1000</label>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <label htmlFor="">$1000 a $2000</label>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <label htmlFor="">Más de $2000</label>
                        </div>
                    </div>
                </form>
            </aside>
            <section className='cardsItemContainer'>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </section>
        </div>
    )
}

export { ItemListContainer }