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


const removeCartItems = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    } 


    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} :
            cartItem);
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
    total: 0,
    setTotal: () => {},
    clearCartItem: () => {},
    setCartCount: () => {}
});

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total, carItem) => total + carItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, carItem) => total + carItem.quantity * carItem.price, 0)
        setCartTotal(newCartTotal);
    }, [cartItems])


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItems(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const value = { isCartOpen, 
        cartTotal,
        cartItems, 
        cartCount, 
        setIsCartOpen, 
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart
    };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    
}