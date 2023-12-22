import React from 'react';

const Partner = () => {
    return (
        <div className='my-8 '>
        <h1 className='text-4xl font-bold my-8 text-center'> Our valuable user</h1>
        <div className=' shadow-2xl  flex flex-wrap gap-4 p-5 justify-between my-4 ' >

            <div className='w-56 h-44 shadow-xl border-2  rounded-lg'>
               <img className='w-full rounded-lg hero-overlay opacity-80' src="https://i.ibb.co/8gtmB7g/360-F-260040863-f-Yx-B1-Snrzg-J9-AOkc-T0hoe7-IEFts-Pi-HAD.jpg" alt="" />

            </div>
            <div className='w-56 h-44  shadow-xl rounded-lg'>
                <img className=' rounded-lg hero-overlay  w-full' src="https://i.ibb.co/Jqvk9mS/images.jpg" alt="" />

            </div>
            <div className=' w-56 h-44 shadow-xl  rounded-lg'>
                <img className=' rounded-lg hero-overlay  w-full' src="https://i.ibb.co/7JpnfWF/images-1.jpg" alt="" />

            </div>
        </div>

    </div>
    );
};

export default Partner;