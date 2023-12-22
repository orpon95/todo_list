import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import backImg from "./black-smooth-wooden-textured-background.jpg"

const Mainroot = () => {
    const customStyle = {
        backgroundImage: `url(${backImg})`,
        backgroundSize: 'cover', // You can set other background properties as needed
        backgroudRepeat:"no-repeat"
        
      };
    return (
        <div style={customStyle}>
            <div className='w-[80%] mx-auto py-6  '>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
            
        </div>
        </div>
    );
};

export default Mainroot;