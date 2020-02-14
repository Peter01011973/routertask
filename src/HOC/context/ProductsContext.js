import React, {createContext, useReducer} from 'react';
import {productsReducer, cartReducer} from './ProductsReducer';

export const ProductsContext = createContext(null);
const ProductsContextProvider = ({children}) => {
    const initialState = [];
    const [products, dispatchProd] = useReducer(productsReducer, initialState);
    const [cart, dispatchCart] = useReducer(cartReducer, []);
    
    return (
        <ProductsContext.Provider value = {{dispatchProd, products, cart, dispatchCart}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider
