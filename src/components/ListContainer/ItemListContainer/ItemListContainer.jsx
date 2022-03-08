import "./ItemListContainer.css";
import { ItemList } from './cards/ItemList';
import {  useEffect, useState } from "react";
import { Aside } from "./aside/Aside";
import { getFetchs } from "../../../helpers/getFetchs";


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
    console.log(prods);

    //contador
    const onAdd = (count) => {
        if (count !== 0) {
            console.log(count);
        }
    }



    return(
        <div className='itemListContainer'>
            <aside className='asideDeco'>
                <Aside />
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