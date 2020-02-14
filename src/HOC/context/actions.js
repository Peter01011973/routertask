export const deleteProductAction = (product) => ({type: 'DELETE_PRODUCT', payload: product})
export const addProductAction = (product) => ({type: 'ADD_PRODUCT', payload: product})
export const increaseCountAction = (product) => ({type: 'INCREASE_COUNT_IN_STOCK', payload: product});
export const reduceCountAction = (product) => ({type: 'REDUCE_COUNT_IN_STOCK', payload: product});

export const addToCartAction = (product) => ({type: 'ADD_TO_CART', payload: product});
export const deletePoductFromCartAction = (product) => ({type: 'DELETE_PRODUCT_FROM_CART', payload: product})
export const reduceProductFromCartAction = (product) => ({type: 'REDUCE_PRODUCT_FROM_CART', payload: product});
export const increaseProductFromCartAction = (product) => ({type: 'INCREASE_PRODUCT_FROM_CART', payload: product})
export const returnProductFromCart = (product) => ({type: 'RETURN_PRODUCT_FROM_CART', payload: product})