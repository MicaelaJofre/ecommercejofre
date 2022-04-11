import React from 'react';
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UseContextAllIn } from "../../context/CartContext";

const ItemFormPayment = ({ setNewOrder, setLoading, handleCount}) => {

    const { cartList, subTotal, shippingCart, setCartList } = UseContextAllIn();

    // se utiliza la librería formik para las validaciones
    return (
        <div className='containerFormPayment'>
            <Link to='/cart'>
                <p>Volver</p>
            </Link>
            <h2 className='paymentH2'>Datos de contacto</h2>
            <div className="formPay">
                <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        email: '',
                        emailRep: ''
                    }}
                    validate={(data) => {
                        let errorsImput = {};
                        //validación nombre
                        if (!data.name) {
                            errorsImput.name = 'Por favor ingresa un nombre';
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.name)) {
                            errorsImput.name = 'El nombre solo puede contener letras y espacios';
                        }
                        //validación teléfono
                        if (!data.phone) {
                            errorsImput.phone = 'Por favor ingresa un teléfono';
                        } else if (!/^\d{1,14}$/.test(data.phone)) {
                            errorsImput.phone = 'El teléfono solo puede contener números'
                        }
                        //validación correo
                        if (!data.email) {
                            errorsImput.email = 'Por favor ingresa un correo electrónico';
                        } else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data.email)) {
                            errorsImput.email = 'Por favor ingresa un correo electrónico válido';
                        }
                        if (!data.emailRep) {
                            errorsImput.emailRep = 'Por favor ingresa un correo electrónico';
                        } else if (data.email !== data.emailRep) {
                            errorsImput.emailRep = 'El correo electrónico no coinside'
                        } 
                        
                        return errorsImput;
                    }}
                    onSubmit={(data, { resetForm }) => {
                        let order = {};
                        order.buyer = data;
                        order.total = shippingCart + subTotal;
                        order.items = cartList.map(item => {
                            const id = item.id;
                            const name = item.name;
                            const price = item.price * item.quantity;
                            return { id, name, price };
                        })

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
                        
                        handleCount();
                        resetForm();
                    }}
                >
                    {({ errors }) => (
                        
                        <Form>
                            <Field
                                type="text"
                                placeholder='Nombre'
                                id='name'
                                name='name'
                            />
                            <ErrorMessage name='name' component={() => (
                                <div className='errors'>{errors.name}</div>
                            )} />
                            
                            <Field type="text"
                                placeholder='Número de teléfono'
                                id='phone'
                                name='phone'
                            />
                            <ErrorMessage name='phone' component={() => (
                                <div className='errors'>{errors.phone}</div>
                            )} />
                            
                            <Field type="email"
                                placeholder='Email'
                                name='email'
                                id='email'
                            />
                            <ErrorMessage name='email' component={() => (
                                <div className='errors'>{errors.email}</div>
                            )} />
                            
                            <Field type="email"
                                placeholder='Repetir email'
                                name='emailRep'
                                id='emailRep'
                            />
                            <ErrorMessage name='emailRep' component={() => (
                                <div className='errors'>{errors.emailRep}</div>
                            )} />
                            

                            <button type='submit' className='btnForm'>Terminar compra</button>
                        </Form>
                    )}
                </Formik>
                <div className="buys">
                    {cartList.map(prod => {
                        return (
                            <div className='tablePay' key={prod.id}>
                                <p>{prod.name}</p>
                                <p className='tablePayP'>${prod.price * prod.quantity}</p>
                            </div >

                        )

                    })}

                    <div className='payTotal'>
                        <p>Costo de envio ${shippingCart}</p>
                        <div className="payTotalH">
                            <h3 className='payFinal'>Total</h3>
                            <h4 className='payFinal'>${subTotal + shippingCart}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ItemFormPayment }