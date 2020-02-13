import React from 'react';
import AddProductForm from '../AddProduct/AddProduct';
import './ProductsRender.css';

const ProductsRender = (
    { setAddProduct, addProductFormSubmit, products, addProduct, 
        increaseCountInStock, reduceCountInStock, deleteProduct, addToCart }) => {
    
    const renderProducts = products.length > 0 && (
        <table>
            <thead>
                <tr>
                    <th>product name</th>
                    <th>quantity</th>
                    <th>add to cart</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => {
                    const { productName, productQuantity } = product;
                    return (
                        <tr key = {index}>
                        <td>
                            <button onClick = {()=>deleteProduct(product)} >X</button>
                            {productName}
                        </td>
                        <td>
                            <button onClick = {()=>reduceCountInStock(product)} disabled={product.productQuantity ===0}>-</button>
                            {productQuantity}
                            <button onClick = {()=>increaseCountInStock(product)}>+</button>
                        </td>
                        <td>
                            <button onClick = {()=>addToCart(product)} disabled={product.productQuantity === 0}>Add to cart</button>
                        </td>
                    </tr>
                    )

                })}
            </tbody>
        </table>
    )
    return (
        <div className='products__render'>
            <button onClick = {()=>setAddProduct(true)}>Add new product</button>
            {addProduct && <AddProductForm addProductFormSubmit={addProductFormSubmit}/>}
            {renderProducts}            
        </div>
    )
}

export default ProductsRender
