import {ADD_PRODUCT, INCREASE_COUNT_IN_STOCK, REDUCE_COUNT_IN_STOCK, DELETE_PRODUCT, DELETE_PRODUCT_FROM_CART, REDUCE_PRODUCT_FROM_CART, INCREASE_PRODUCT_FROM_CART} from './consts';
import {ADD_TO_CART} from './consts';
import produce from 'immer';

export const ProductsReducer = produce((draft, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_PRODUCT: draft.push(payload); return draft;
        case INCREASE_COUNT_IN_STOCK: draft.forEach(product => {if (product.productName === payload.productName) product.productQuantity = product.productQuantity+1}); return draft;
        case REDUCE_COUNT_IN_STOCK: draft.forEach(product => {if (product.productName === payload.productName) product.productQuantity = product.productQuantity-1}); return draft;
        case DELETE_PRODUCT:  return draft.filter(product =>product.productName !== payload.productName);
        default: return draft
    }
}) 

export const CartReducer = produce((draft, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_TO_CART: let find = false; 
        draft.forEach(product => {if (product.productName === payload.productName) {product.productQuantity = product.productQuantity+1; find = true}}); 
        if (!find) draft.push({productName: payload.productName, productQuantity: 1}); return draft;
        case DELETE_PRODUCT_FROM_CART: return draft.filter(product => product.productName !== payload.productName);
        case REDUCE_PRODUCT_FROM_CART: draft.forEach(product => {if (product.productName === payload.productName) product.productQuantity = product.productQuantity-1}); return draft;
        case INCREASE_PRODUCT_FROM_CART: draft.forEach(product => {if (product.productName === payload.productName) product.productQuantity = product.productQuantity+1}); return draft;
        default: return draft;
    }
})