import React, {createContext, useReducer} from 'react';
import {ProductsReducer, CartReducer} from './ProductsReducer';

export const ProductsContext = createContext(null);
const ProductsContextProvider = ({children}) => {
    const initialState = [];
    const [products, dispatchProd] = useReducer(ProductsReducer, initialState);
    const [cart, dispatchCart] = useReducer(CartReducer, []);
    
    return (
        <ProductsContext.Provider value = {{dispatchProd, products, cart, dispatchCart}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider
