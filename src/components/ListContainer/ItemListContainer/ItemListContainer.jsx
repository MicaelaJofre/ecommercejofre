import "./ItemListContainer.css";
import { ItemList } from './cards/ItemList';
import {  useEffect, useState } from "react";
import { Aside } from "./aside/Aside";
import { getFetchs } from "../../../helpers/getFetchs";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    //filtro subcategoria
    const [subcategory, setSubcategory] = useState(false);

    useEffect(() => {
        /* console.log(subcategory) */
    },[subcategory]);


    //productos
    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    //promesa
    useEffect(() => {

        if (categoryId) {
                getFetchs
                    .then((data) => setProds(data.filter(prod => prod.category === categoryId)))
                    .catch((err) => console.log(err))
                    .finally(() => setLoading(false))
            }      
    }, [categoryId])

    //contador
    const onAdd = (count) => {
        if (count !== 0) {
            console.log(count);
        }
    }
    
    return(
        <div className='itemListContainer'>
            <aside className='asideDeco'>
                {
                    loading ? <div ></div>
                        :
                        <Aside prods={prods} setSubcategory={setSubcategory} />
                }
                
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