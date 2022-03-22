import "./ItemListContainer.css";
import { ItemList } from './cards/ItemList';
import {  useEffect, useState } from "react";
import { Aside } from "./aside/Aside";
import { getFetchs } from "../../../helpers/getFetchs";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    //filtro subcategoria
    const [subcategory, setSubcategory] = useState([]);

    const [filterProds, setFilterProds] = useState([]);

    const [shippingFilter, setShippingFilter] = useState(false);

    
    useEffect(() => {
        //check envio gratis
        let array = prods;
        if (shippingFilter) {
            array = prods.filter(prod => prod.shipping === shippingFilter);
        }
        //checks subcategorias
        if (subcategory.length > 0) {
            array = array.filter(prod => {
                if (subcategory.includes(prod.sub_category)) {
                    return prod;
                }
            })
        }
        //check por precio
        setFilterProds(array)
    },[subcategory, shippingFilter]);

    //productos
    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    //promesa
    useEffect(() => {

        // borra los filtros cuando cambia de categoria
        setFilterProds([]);
        window.scrollTo(0, 0);

        if (categoryId) {
                getFetchs
                    .then((data) => {
                        setProds(data.filter(prod => prod.category === categoryId));
                        setFilterProds(data.filter(prod => prod.category === categoryId))
                    })
                    .catch((err) => console.log(err))
                    .finally(() => setLoading(false))
            }      
    }, [categoryId])

    
    
    return(
        <div className='itemListContainer'>
            <aside className='asideDeco'>
                {
                    loading ? <div ></div>
                        :
                        <Aside prods={prods} setSubcategory={setSubcategory} subcategory={subcategory} setShippingFilter={setShippingFilter} />
                }
                
            </aside>
            <section className='cardsItemContainer'>
                {
                    loading ? <div className="loader" id="loader"></div>
                            : 
                        < ItemList prods= {filterProds} />   
                }
                
            </section>
        </div>
    )
}

export { ItemListContainer }