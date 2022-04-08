import React from 'react';
import { UseContextAllIn } from "../../context/CartContext";
import { collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
import { useState } from "react";
import { ItemFormPayment } from "./ItemFormPayment";
import './FormPayment.css';

const FormPayment = () => {
    
    const { cartList } = UseContextAllIn();

    const [loading, setLoading] = useState(true);
    
    const [newOrder, setNewOrder] = useState('');

    window.scrollTo(0, 0);

    // contador de stock
    const handleCount = async () => {
        
        const db = getFirestore();
        const queryItems = collection(db, 'items');

        const queryStock = query(queryItems, where(documentId(), 'in', cartList.map(it => it.id)));

        const batch = writeBatch(db);

        await getDocs(queryStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, { stock: res.data().stock - cartList.find(item => item.id === res.id).quantity })))
        batch.commit();
    }
    

    
    return (
        <>
            {
                loading
                    ? <ItemFormPayment setLoading={setLoading} setNewOrder={setNewOrder} handleCount={handleCount} />
                    : <div className='finalBuy'>
                        <h2>Felicidades!</h2>
                        <p>Su compra se realizó con éxito</p>
                        <h3>El código de orden es <span className='spanFinal'>{newOrder}</span></h3>
                    </div>
            }
        </>
    )
}

export { FormPayment }
