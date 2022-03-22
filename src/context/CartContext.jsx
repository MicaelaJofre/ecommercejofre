import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext([]);

export const UseContextAllIn = () => useContext(CartContext);

const CartContexFilter = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const [subTotal, setSubTotal] = useState(0);

    const [elements, setElements] = useState(0)

    // contador carrito y filtro para no repetir productos
    const addListCart = (item) => {
        
        if (cartList.length > 0) {
            cartList.forEach(prod => {
                if (prod.id === item.id) {
                    item.quantity += prod.quantity;
                } 
            });
            setCartList([...cartList.filter(prod => prod.id !== item.id), item])
        } else {
            setCartList([...cartList, item])
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
        cartList.forEach(prod => {
            res += prod.quantity * prod.price;
        });
        setSubTotal(res);
    }

    // contador del item del carrito
    const totalElements = () => {
        let total = 0;
        cartList.forEach(prod => {
            total += prod.quantity;
        });
        setElements(total);
    }

    useEffect(() => {
        totalElements();
        totalPrice();
    }, [cartList])
    

    return (
        <CartContext.Provider value={{
            cartList,
            addListCart,
            emptyCard,
            deletProd,
            subTotal,
            elements
        }}>
            {children}
        </CartContext.Provider>
    )
}




export default CartContexFilter;