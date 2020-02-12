import {ADD_PRODUCT} from './consts';
import produce from 'immer';

export const ProductsReducer = produce((draft, action) => {
    console.log('draft', draft);
    
    switch (action.type) {
        case ADD_PRODUCT: draft.push(action.payload);
        // case 'CHANGE_USER': return action.payload;
        // case 'DELETE_USER': return null;
        // default: return state
    }
})