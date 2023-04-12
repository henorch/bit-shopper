import { createContext, useEffect, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
                    {...cartItem, quantity: cartItem.quantity + 1} :
                     {...cartItem})
    } 

    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    setCartCount: () => {}
});

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0)

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total, carItem) => total + carItem.quantity, 0)
        setCartCount(newCartCount)
    })

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd))
    }

    const value = { isCartOpen, cartItems, cartCount, setIsCartOpen, addItemToCart};
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    
}