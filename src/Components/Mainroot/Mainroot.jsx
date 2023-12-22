import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Mainroot = () => {
    return (
        <div className='w-[80%] mx-auto'>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
            
        </div>
    );
};

export default Mainroot;