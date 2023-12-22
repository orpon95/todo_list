import React from 'react';
import { MdDelete } from 'react-icons/md';

const Progressdivinfo = ({ data, refetch }) => {
    const { title, des, deadline ,_id } = data
    return (
        <div  className='space-y-4 py-7 border-2 rounded-lg w-[80%] mx-auto bg-slate-500/60'>
        <p className={` flex items-center justify-center text-white border-2 bg-slate-500 p-4 w-[80%] mx-auto rounded-lg ${isDragging ? "bg-red-400" : "bg-slate-600"} `} >


           <p className='flex flex-col justify-center'> <span className='text-xl font-bold mx-3'>title:-</span>{title}</p>

        </p>
        <p className={` flex flex-col items-center justify-center text-white border-2 bg-slate-500 p-4 w-[80%] mx-auto rounded-lg ${isDragging ? "bg-red-400" : "bg-slate-600"} `}><span className='text-xl font-bold mx-3'>description:-</span>{des}</p>
        <p className={` flex flex-col items-center justify-center text-white border-2 bg-slate-500 p-4 w-[80%] mx-auto rounded-lg ${isDragging ? "bg-red-400" : "bg-slate-600"} `}><span className='text-xl font-bold mx-3'>deadline:-</span>{deadline}</p>
        <MdDelete className='text-red-500 text-4xl mx-auto ' />

    </div>
    );
};

export default Progressdivinfo;