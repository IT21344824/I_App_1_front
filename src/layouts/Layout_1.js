import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout_1 = () => {
  return (
    <div className="">
      <Navbar />
      
      <div className="flex ">
        <Sidebar className="" />
        <div className="flex-grow justify-center items-center mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout_1;
