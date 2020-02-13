import React, {useContext} from 'react';
import {ProductsContext} from '../../HOC/context/ProductsContext';
import {deletePoductFromCartAction, increaseProductFromCartAction, reduceProductFromCartAction, reduceCountAction, increaseCountAction} from '../../HOC/context/actions';
import './cart.css';

const Cart = () => {
    const { products, cart, dispatchCart, dispatchProd } = useContext(ProductsContext);
    const deleteProductFromCart = product => dispatchCart(deletePoductFromCartAction(product));
    const reduceProductFromCart = product => {
        dispatchCart(reduceProductFromCartAction(product));
        dispatchProd(increaseCountAction(product))
    }
    const increaseProductFromCart = (product) => {
        let maxCount = 0;
        products.forEach(product => {if (product.productName === product.productName) {maxCount = product.productQuantity}}); 
        if (maxCount !== 0) {
            dispatchCart(increaseProductFromCartAction(product));
            dispatchProd(reduceCountAction(product))
        }
    };

    return (
        <div className = 'cart'>
            {cart.length > 0 && (<table>
                <thead>
                    <tr>
                        <th>
                            Product
                        </th>
                        <th>
                            Quantity in cart
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product , index) => (
                        <tr key={index}>
                            <td>
                                <button onClick={() =>deleteProductFromCart(product)}>X</button>
                                {product.productName}
                            </td>
                            <td>
                                <button onClick={() =>reduceProductFromCart(product)} disabled={product.productQuantity===0}>-</button>
                                {product.productQuantity}
                                <button onClick={() =>increaseProductFromCart(product)}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>)}
        </div>
    )
}

export default Cart
