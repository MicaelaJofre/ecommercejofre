import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const UseContextAllIn = () => useContext(CartContext);

const CartContexFilter = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    // contador carrito y filtro para no repetir productos
    const addListCart = (item) => {
        
        if (cartList.length > 0 ) {
            cartList.map(prod => {
                if (prod.id === item.id) {
                    item.quantity += prod.quantity;
                    return prod;
                } 
            })
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
    
    

    return (
        <CartContext.Provider value={{
            cartList,
            addListCart,
            emptyCard,
            deletProd,
        }}>
            {children}
        </CartContext.Provider>
    )
}




export default CartContexFilter;