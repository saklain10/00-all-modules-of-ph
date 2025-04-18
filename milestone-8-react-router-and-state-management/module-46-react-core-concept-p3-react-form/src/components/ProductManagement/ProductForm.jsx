import React, { use, useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

const [error, setError] = useState('')

const handleProductSubmit = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name,price,quantity)

    // validation
    if(name.length === 0){
        setError("Please provide a Product Name")
        return;
    }
    
    else if(price.length === 0){
        setError("Please provide a price")
        return;
    }
    else if (price< 0){
        setError("Price Can not be negative")
        return;
    }
    else{
        setError('')
    }

    //store in a object
    const newProduct = {
        name,
        price,
        quantity
    }
    // console.log(newProduct)
    // if(!error){
    //     handleAddProduct(newProduct)
    // } // not working for me and ucit o na

    handleAddProduct(newProduct)

}
    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="number" name='price' placeholder='Product Price' />
                <br />
                <input type="number" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" name="" id="" value="Submit"/>
            </form>
            <p><small style={{color:"red"}}>{error}</small></p>
        </div>
    );
};

export default ProductForm;