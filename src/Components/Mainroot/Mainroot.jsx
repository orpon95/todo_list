import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Mainroot = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
            
        </div>
    );
};

export default Mainroot;