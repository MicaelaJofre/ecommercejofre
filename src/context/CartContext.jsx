import React from 'react';
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext([]);

export const UseContextAllIn = () => useContext(CartContext);

const CartContexFilter = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const [subTotal, setSubTotal] = useState(0);

    const [elements, setElements] = useState(0);

    const [shippingCart, setShippingCart] = useState();

    // contador carrito y filtro para no repetir productos
    const addListCart = (item) => {
        if (cartList.length > 0) {
            cartList.forEach(prod => prod.id === item.id && (item.quantity += prod.quantity));
            setCartList([...cartList.filter(prod => prod.id !== item.id), item]);
        } else {
            setCartList([...cartList, item]);
        }
    }

    // vaciar el carrito
    const emptyCard = _ => {
        setCartList([]);
    }

    //eliminar un elemento del carrito
    const deletProd = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }
    
    //contador subtotal
    const totalPrice = () => {
        let res = 0;
        cartList.forEach(prod =>res += prod.quantity * prod.price);
        setSubTotal(res);
    }

    

    // contador del item del carrito
    const totalElements = () => {
        let total = 0;
        cartList.forEach(prod => total += prod.quantity);
        setElements(total);
    }

    //envio gratis
    const shippingFree = () => {
        let shippTrue = 0;
        let shippFalse = 0;
        cartList.forEach(prod => prod.shipping ? shippTrue += prod.quantity : shippFalse += prod.quantity )
        let totalShipping = shippTrue > shippFalse ? true : false;
        setShippingCart(totalShipping ? 0 : 500)
    }


    useEffect(() => {
        totalElements();
        totalPrice();
        shippingFree();
    }, [cartList])
    
    return (
        <CartContext.Provider value={{
            cartList,
            addListCart,
            emptyCard,
            deletProd,
            subTotal,
            elements,
            shippingCart,
            setCartList
        }}>
            {children}
        </CartContext.Provider>
    )
}




export default CartContexFilter;