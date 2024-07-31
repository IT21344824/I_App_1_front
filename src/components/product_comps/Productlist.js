import React, { useState, useEffect } from "react";
import callApi from '../../api/api';
import MUIDataTable from "mui-datatables";
import { NavLink } from "react-router-dom";
import { onConfirm } from 'react-confirm-pro';

const Productlist = () => {
  const [products, setProducts] = useState([]);

  //get all prodcuts
  useEffect(() => {
    callApi('products', 'GET', null)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products:', error);
      });
  }, []);


  //delete prodcut
  const deleteProduct = async (id) => {
    const defaultOptions = {
      title: (
        <h3>
          Are you sure?
        </h3>
      ),
      description: (
        <p>Do you really want to delete this record? This process cannot be undone.</p>
      ),
      onSubmit: async () => {
        callApi(`products/${id}`, 'DELETE', null)
          .then(() => {
            setProducts(products.filter(product => product.id !== id));
          })
          .catch(error => {
            console.error('There was an error deleting the product:', error);
          });
      },
      onCancel: () => {
        // Handle cancel action
      },
    };
    onConfirm({
      ...defaultOptions,
      type: "dark",
      btnSubmit: "Confirm",
      btnCancel: "Cancel",
      keyboardEvents: {
        escape: true,
        submit: true
      }
    })
  };

  // columns / header
  const columns = [
    {
      name: "id",
      label: "No",    
      options: {
        filter: true,
        sort: true,
        setCellProps: () => ({
          className:  'dark:bg-gray-300 dark:text-slate-700' 
        }),
        setCellHeaderProps: () => ({
          className: ' dark:text-gray-200  dark:bg-gray-400 dark:font-bold'
        })
      }
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
        setCellProps: () => ({
          className:  'dark:bg-gray-300 dark:text-slate-700' 
        }),
        setCellHeaderProps: () => ({
          className: ' dark:text-gray-200  dark:bg-gray-400 dark:font-bold'
        })
      }
    },
    {
      name: "number",
      label: "Quantity",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          className:  'dark:bg-gray-300 dark:text-slate-700' 
        }),
        setCellHeaderProps: () => ({
          className: ' dark:text-gray-200  dark:bg-gray-400 dark:font-bold'
        })
      }
    },
    {
      name: "text",
      label: "Description",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          className:  'dark:bg-gray-300 dark:text-slate-700' 
        }),
        setCellHeaderProps: () => ({
          className: ' dark:text-gray-200  dark:bg-gray-400 dark:font-bold'
        })
      }
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const productId = products[tableMeta.rowIndex].id;
          return (
            <div>
              <NavLink to={`/edit/${productId}`}>
                <button className="btn btn-primary mr-3 p-1 hover:text-slate-950 text-gray-600rounded">
                <svg class="h-4 w-4 text-blue-400"  width="4"  height="4"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                </button>
              </NavLink>
              <button className="btn btn-primary p-1 hover:text-slate-950 text-gray-600  rounded"
                onClick={() => deleteProduct(productId)}>
                <svg class="h-4 w-4 text-red-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
              </button>
            </div>
          );
        },
        setCellProps: () => ({
          className:  'dark:bg-gray-300 dark:text-slate-700' 
        }),
        setCellHeaderProps: () => ({
          className: ' dark:text-gray-200  dark:bg-gray-400 dark:font-bold'
        })
      }
    },
  ];

  const options = {
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
  };

  return (
    <div className="w-full flex justify-center bg-white dark:bg-gray-800 dark:text-gray-100">
      <div className="w-3/5">
        <MUIDataTable
          title={"Product List"}
          data={products}
          columns={columns}
          options={options}
          className="text-sm  rtl:text-right text-gray-500 
          shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] "
        />
      </div>
    </div>
  );
}

export default Productlist;
