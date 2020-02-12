import React, {useState} from 'react';

const AddProductForm = ({addProductFormSubmit}) => {
    const initProductState = {
        productName: '',
        productQuantity: 0        
    }
    const [product, setProduct] = useState(initProductState)
    return (
        <form onSubmit={(event) => { addProductFormSubmit(event, product); setProduct(initProductState);}}>
            <label>Product name:</label>
            <input 
                type='text' 
                value = {product.productName}
                onChange = {(e)=>setProduct({...product, productName: e.target.value})}
            />
            <label>Quantity in stock:</label>
            <input 
                type='number' 
                value = {product.productQuantity}
                onChange = {(e)=>setProduct({...product, productQuantity: e.target.value})}
            /> 
            <button>Submit</button>                      
        </form>
    )
}

export default AddProductForm
