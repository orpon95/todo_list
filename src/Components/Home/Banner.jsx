import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='my-7'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">create your own TO DO list</p>
                        <NavLink to={"/explore"} ><button className="btn btn-primary">let explore</button></NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;