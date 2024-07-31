import React from 'react'
import Productslist from '../../components/product_comps/Productlist';
import { Link } from "react-router-dom";


const Productlist_pg = () => {
    return (
        <div className="flex justify-center items-center w-full pt-5 flex-col bg-white dark:bg-gray-800 dark:text-gray-100 h-full">
            <div className="flex justify-between w-3/5 mb-2  ">
                <p className='flex items-center justify-center text-2xl font-bold ml-2'>Prodcut List</p>
                <Link to="/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add New
                </Link>
                
            </div>
            <hr  className='w-3/5 rounded border-4 mb-5'/>
            <Productslist />
        </div>
    )
}

export default Productlist_pg
