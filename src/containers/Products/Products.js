import React, {useState, useContext} from 'react';
import {ProductsContext} from '../../HOC/context/ProductsContext';
import {addProductAction, increaseCountAction, reduceCountAction, deleteProductAction, addToCartAction} from '../../HOC/context/actions';
import ProductsRender from '../../components/ProductsRender/ProductsRender';

const Products = () => {
    const [addProduct, setAddProduct] = useState(false);
    const { products, dispatchProd, dispatchCart } = useContext(ProductsContext);

    const addProductFormSubmit = (event, product) => {
        event.preventDefault();
        dispatchProd(addProductAction(product));
    }

    const increaseCountInStock = product => dispatchProd(increaseCountAction(product))
    const deleteProduct = product => dispatchProd(deleteProductAction(product))
    const reduceCountInStock = product => dispatchProd(reduceCountAction(product))
    const addToCart = product => {
        dispatchCart(addToCartAction(product));
        dispatchProd(reduceCountAction(product));
    }
    
    return (
        <ProductsRender
            setAddProduct={setAddProduct}
            addProductFormSubmit={addProductFormSubmit}
            products={products}
            addProduct={addProduct}
            reduceCountInStock={reduceCountInStock}
            increaseCountInStock={increaseCountInStock}
            deleteProduct={deleteProduct}
            addToCart={addToCart}
        />
    )
}

export default Products
