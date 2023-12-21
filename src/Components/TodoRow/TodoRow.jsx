/* eslint-disable react/prop-types */
import React from 'react';

const TodoRow = ({data}) => {
    console.log(data,"todo data");
    const {list,_id} = data

    return (
        <div  className='space-y-4 py-7'>
            <p className='border-2 bg-slate-500 p-4 w-[80%] mx-auto rounded-lg' draggable> {list} </p>
            
        </div>
    );
};

export default TodoRow;