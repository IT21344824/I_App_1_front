import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import ProductForm from './ProductForm';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        name: '',
        quantity: '',
        description: '',
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/products/get/${id}`);
                const productData = res.data.data_details;
                setInitialValues({
                    name: productData.name,
                    quantity: productData.quantity,
                    description: productData.description,
                });
            } catch (error) {
                alert("Product fetch failed");
                console.error(error);
            }
        };
        fetchProducts();
    }, [id]);

    const handleEdit = async (values) => {
        try {
            await axios.put(`http://localhost:5000/products/update/${id}`, values); 
            alert("Product updated successfully");
            navigate('/products');
        } catch (error) {
            alert("Product update failed");
            console.error("Update product error:", error);
        }
    };

    return (
        <div className='py-10' style={{ width: "50%", margin: "auto" }}>
            <div className="row m-2 p-3 dark:bg-gray-800 rounded-lg ">
                <p className="text-2xl font-bold whitespace-nowrap text-gray-900 dark:text-white">Edit Product</p>
                <hr className='rounded border-4 dark:border-gray-600' />
                <br />
                <ProductForm key={initialValues.name} initialValues={initialValues} onSubmit={handleEdit} />
            </div>
        </div>
    );
};

export default EditProduct;
