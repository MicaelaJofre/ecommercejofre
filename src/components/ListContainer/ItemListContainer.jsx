import "./ItemListContainer.css";
import { getFetchs } from '../helpers/getFetchs';
import { ItemList } from './ItemList';
import {  useEffect, useState } from "react";


const ItemListContainer = () => {

    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(true)

    //promesa
    useEffect(() => {
        getFetchs
            .then((data) => {
                return data;
            })
            .then((data) => setProds(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    

    //contador
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
                            
                            <label><input type='checkbox' />Jarrones y floreros</label>
                        </div>
                        <div>
                            <label><input type='checkbox' />Adornos</label>
                        </div>
                        <div>
                            <label><input type='checkbox' />Organizadores</label>
                        </div>
                        <div>
                            <label><input type='checkbox' />Espejos</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <legend>Envío</legend>
                            <label><input type='checkbox' />Envío gratis</label>
                        </div>
                    </div>
                    <div>
                        <legend>Precio</legend>
                        <div>
                            <label><input type='checkbox' />Hasta $1000</label>
                        </div>
                        <div>
                            <label><input type='checkbox' />$1000 a $2000</label>
                        </div>
                        <div>
                            <label><input type='checkbox' />Más de $2000</label>
                        </div>
                    </div>
                </form>
            </aside>
            <section className='cardsItemContainer'>
                {
                    loading ? <div className="loader" id="loader"></div>
                            : 
                        < ItemList onAdd={onAdd} prods={prods} />   
                }
            </section>
        </div>
    )
}

export { ItemListContainer }