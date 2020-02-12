import React, {createContext, useReducer} from 'react';
import {ProductsReducer} from './ProductsReducer';

export const ProductsContext = createContext(null);
const ProductsContextProvider = ({children}) => {
    const initialState = [];
    const [products, dispatch] = useReducer(ProductsReducer, initialState);
    
    return (
        <ProductsContext.Provider value = {{dispatch, products}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider
