import React from 'react';
import "./ItemListContainer.css";
import { ItemList } from './cards/ItemList';
import {  useEffect, useState } from "react";
import { Aside } from "./aside/Aside";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = () => {

    //productos
    const [prods, setProds] = useState([]);

    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    //filtro subcategoria
    const [subcategory, setSubcategory] = useState([]);

    const [filterProds, setFilterProds] = useState([]);

    const [shippingFilter, setShippingFilter] = useState(false);

    const [priceFilter, setPriceFilter] = useState('0');

    
    useEffect(() => {
    
        window.scrollTo(0, 0);

        //filtros para envio - precio - sub-categoria
        const db = getFirestore();
        const queryCollection = collection(db, 'items');

        let queryFilter = query(queryCollection, where('category', '==', categoryId));

        queryFilter = shippingFilter ? query(queryFilter, where('shipping', '==', true)) : queryFilter;

        queryFilter = subcategory.length > 0 ? query(queryFilter, where('sub_category', 'in', subcategory)) : queryFilter;

        queryFilter = priceFilter === '1'
                        ? query(queryFilter, where('price', '<', 1000))
                        :  priceFilter === '2'
                            ? query(queryFilter, where('price', '>=', 1000), where('price', '<', 2000))
                            : priceFilter === '3'
                                ? query(queryFilter, where('price', '>=', 2000)) 
                                : queryFilter;

        
        getDocs(queryFilter)
            .then(res => setFilterProds(res.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch((err) => console.log(err))
        
    },[subcategory, shippingFilter, priceFilter]);

    

    //promesa
    useEffect(() => {
        
        // borra los filtros cuando cambia de categoria
        setFilterProds([]);
        setShippingFilter(false); 
        setSubcategory([]);
        setPriceFilter('0');
        setLoading(true);

        window.scrollTo(0, 0);
        
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        let queryFilter = query(queryCollection, where('category', '==', categoryId));
        
        getDocs(queryFilter)
            .then(res => {
                setProds(res.docs.map(item => ({ id: item.id, ...item.data() })));
                setFilterProds(res.docs.map(item => ({ id: item.id, ...item.data() })));
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        
    }, [categoryId])

    
    
    return(
        <div className='itemListContainer'>
            <aside className='asideDeco'>
                {
                    loading ? <div ></div>
                        :
                        <Aside
                            prods={prods}
                            setSubcategory={setSubcategory}
                            subcategory={subcategory}
                            setShippingFilter={setShippingFilter}
                            setPriceFilter={setPriceFilter}
                            shippingFilter={shippingFilter}
                            priceFilter={priceFilter}
                        />
                }
                
            </aside>
            <section className='cardsItemContainer'>
                {
                    loading
                        ? <div className="loader" id="loader"></div>
                        : filterProds.length > 0
                            ? < ItemList prods={filterProds} />
                            : <h4 className='emptyH4'>No hay productos disponible</h4>
                }
                
            </section>
        </div>
    )
}

export { ItemListContainer }