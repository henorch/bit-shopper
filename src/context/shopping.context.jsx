import { createContext, useState} from 'react';


export const ShoppingContext = createContext({
    shoppingList: [],
    setShoppingList: () => null,
})

export const ShoppingProvider = ({ children }) => {
    const [shoppingList, setShoppingList] = useState(shoppingList)
    const value = { shoppingList, setShoppingList }

    return <ShoppingContext.Provider>{children}</ShoppingContext.Provider>
}