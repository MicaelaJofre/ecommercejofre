import React, {useEffect, useState} from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { ItemList } from '../../../ListContainer/ItemListContainer/cards/ItemList';
import './setProduct.css'

const SetProduct = () => {


    //productos
    const [prods, setProds] = useState([]);

    useEffect(() => {

        //firebase
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        const queryFilter = query(queryCollection, where('discount', '==', 20))

        getDocs(queryFilter)
            .then(res => setProds(res.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch((err) => console.log(err))
    }, [])

    return (

        <div className='containerProduct'>
            <h3 className='prodH3'>Productos Recomendados</h3>
            <ItemList prods={prods} />
        </div>
    )
}

export { SetProduct }