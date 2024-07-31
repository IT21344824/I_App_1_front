import React from 'react';
import { NavLink , useNavigate } from "react-router-dom";

import callApi from '../../api/api';
import ProductForm from './ProductForm';

const AddProduct_Page = () => {
    const navigate = useNavigate();
    
    const initialValues = {
        name: '',
        number: '',
        text: '',
    };

    const handleAdd = (values) => {
        callApi('products', 'POST', values)
            .then(response => {
                console.log('Product added:', response.data);
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error adding the product:', error);
            });
    };

    return (
        <div className='py-10 ' style={{ width: "50%", margin: "auto"  }}>
            <div className="row m-2 p-3 bg-white dark:bg-gray-800 ">
                <p className="text-2xl font-bold whitespace-nowrap dark:text-white">Add Product</p>
                <hr  className='rounded border-4'/>
                <br className='py-10 mt-10'/>
                <ProductForm initialValues={initialValues} onSubmit={handleAdd} />
            </div>
        </div>
    );
};

export default AddProduct_Page;
