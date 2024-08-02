import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams, NavLink } from "react-router-dom";
import callApi from '../../api/api';

const ProductForm = ({ initialValues, onSubmit }) => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            quantity: Yup.number().required('Required'),
            description: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            onSubmit(values);
        },
        enableReinitialize: true,
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}
            className="bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4  dark:bg-gray-400 ">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
                className="dark:bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

            <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
            <input
                className="dark:bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="quantity"
                name="quantity"
                type="quantity"
                placeholder="Quantity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.quantity}
            />
            {formik.touched.quantity && formik.errors.quantity ? <div>{formik.errors.quantity}</div> : null}

            <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea
                className="dark:bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                placeholder="Description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}

            <div className='flex justify-between '>
                <button
                    type="submit"
                    className="flex justify-center items-center gap-2 btn btn-primary mt-3 mr-2 p-1 hover:text-slate-950 text-gray-600 bg-blue-400 hover:bg-blue-300 rounded"
                >
                    <svg className="h-5 w-5 text-white-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" /></svg>
                    save
                </button>
                <NavLink to="/products">
                    <div className="btn btn-primary mt-3 p-1 hover:text-slate-950 text-gray-600 bg-red-400 hover:bg-red-300 rounded">
                        <svg className="h-5 w-6 text-white-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>

                    </div>
                </NavLink>
            </div>
        </form>
    );
};

export default ProductForm;
