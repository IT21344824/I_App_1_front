import React from 'react';
import { NavLink , useNavigate } from "react-router-dom";
import axios from 'axios';
import callApi from '../../api/api';
import ProductForm from './ProductForm';

const AddProduct_Page = () => {
    const navigate = useNavigate();
    
    const initialValues = {
        name: '',
        quantity: '',
        description: '',
    };
    
    const handleSubmit = async (values) => {
        try {
            const res = await axios.post("http://localhost:5000/products/add", values);
            alert("Product added successfully");

            // Redirect to products page 
            navigate('/products'); 
        } catch (error) {
            alert("Product added fail");
            console.error(error);
        }
    };

    return (
        <div className='py-10 ' style={{ width: "50%", margin: "auto" }}>
            <div className="row m-2 p-3 bg-white dark:bg-gray-800 ">
                <p className="text-2xl font-bold whitespace-nowrap dark:text-white">Add Product</p>
                <hr className='rounded border-4' />
                <br className='py-10 mt-10' />
                <ProductForm initialValues={initialValues} onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default AddProduct_Page;