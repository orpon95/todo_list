import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Mainroot = () => {
    return (
        <div className='w-[80%] mx-auto'>
           <Navbar></Navbar>
           <Outlet></Outlet>
            
        </div>
    );
};

export default Mainroot;