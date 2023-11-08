import { useContext, createContext, ReactNode, useState } from 'react'

type ShoppingCartProviderProps = {
    children: ReactNode;
}

type ShoppingCartContext = {
    getProductQuantity: (id: number) => number;
    addProductQuantity: (id: number, quantity: number) => void;
    minusProductQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
}

type CartItem = {
    id: number,
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children } : ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    const getProductQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    const addProductQuantity = (id: number, quantity: number) => {
        setCartItems(currItems => {
            if (cartItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: quantity}]
            } else {
                return currItems.map(item => {
                    if (item.id == id) {
                        return {...item, quantity: item.quantity + quantity}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const minusProductQuantity = (id: number) => {
        setCartItems(currItems => {
            if (cartItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id == id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            getProductQuantity,
            addProductQuantity,
            minusProductQuantity,
            removeFromCart,
            cartQuantity,
            cartItems,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )

}