import { useContext, createContext, ReactNode } from 'react'

type ShoppingCartProviderProps = {
    children: ReactNode;
}

type ShoppingCartContext = {
    id: number;
    quantity: number;
}

const ShoppingCartContext = createContext({
    id: 1,
    quantity: 1,
})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children } : ShoppingCartProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            { children }
        </ShoppingCartContext.Provider>
    )

}