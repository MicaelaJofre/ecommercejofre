import React from 'react';
import './FormPayment.css';
import { UseContextAllIn } from "../../context/CartContext";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
import { useState } from "react";
import { ItemFormPayment } from "./ItemFormPayment";

const FormPayment = () => {
    
    const { cartList, setCartList, subTotal, shippingCart } = UseContextAllIn();

    const [loading, setLoading] = useState(true);

    const [dataForm, setDataForm] = useState({ name: '', phone:'', email:''});

    const [newOrder, setNewOrder] = useState('');

    window.scrollTo(0, 0);
    
    //iniciar compra
    const handleOrder = async (e) => {
        e.preventDefault();
        
        let order = {};

        order.buyer = dataForm;
        order.total = shippingCart + subTotal;
        order.items = cartList.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price * item.quantity;
            return { id, name, price };
            
        })

        //validaciones
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const repEmail = document.getElementById('emailRep').value;
        const email = document.getElementById('email').value;
        const parentRep = document.getElementById('emailRep');
        const parentEmail = document.getElementById('email');
        const parentPhone = document.getElementById('phone');
        const parentName = document.getElementById('name');

        if ((phone !== "") && (/^\d{1,14}$/.test(phone))) {
            if ((repEmail === email) && (email !== '')) {
                if ((name !== "") && (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name))) {

                    //enviar datos a firebase
                    const db = getFirestore();
                    const queryCollection = collection(db, 'orders');

                    addDoc(queryCollection, order)
                        .then(res => setNewOrder(res.id))
                        .catch(err => console.log(err))
                        .finally(() => {
                            setLoading(false);
                            setCartList([]);
                        })

                    // contador de stock
                    const queryItems = collection(db, 'items');

                    const queryStock = query(queryItems, where(documentId(), 'in', cartList.map(it => it.id)));

                    const batch = writeBatch(db);

                    await getDocs(queryStock)
                        .then(resp => resp.docs.forEach(res => batch.update(res.ref, { stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad })))
                    batch.commit();

                } else {
                    parentName.style.border = 'red solid 1px';
                }
    
            } else {
                parentRep.style.border = 'red solid 1px';
                parentEmail.style.border = 'red solid 1px';
            }
            
        } else {
            parentPhone.style.border = 'red solid 1px';
        }

    }
    const handleInput = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <>
            {
                loading
                    ? <ItemFormPayment handleOrder={handleOrder} handleInput={handleInput} dataForm={ dataForm } />
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
