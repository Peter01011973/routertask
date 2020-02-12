import React, {useState, useContext} from 'react';
import AddProductForm from '../../components/AddProduct/AddProduct';
import {ProductsContext} from '../../HOC/context/ProductsContext';
import {addProductAction} from '../../HOC/context/actions';

const Products = () => {
    const [addProduct, setAddProduct] = useState(false);
    const {products, dispatch} = useContext(ProductsContext);

    const addProductFormSubmit = (event, product) => {
        event.preventDefault();
        dispatch(addProductAction(product));     
    }
   
    return (
        <div>
            <button onClick = {()=>setAddProduct(true)}>Add new product</button>
            {addProduct && <AddProductForm addProductFormSubmit={addProductFormSubmit}/>}
            {products.map((product,index)=>(<p key={index}>{product.productName}</p>))}
        </div>
    )
}

export default Products
