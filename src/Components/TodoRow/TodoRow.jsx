/* eslint-disable react/prop-types */
import React from 'react';
import { useDrag, useDrop } from 'react-dnd'
import { MdDelete } from "react-icons/md";


const TodoRow = ({ data, moveItem }) => {
    console.log(data, "todo data");
    const { list, _id } = data
    // dnd
    const [{ isDragging }, dragRef] = useDrag(
        () => ({
            type: "task",
            item: { id: _id },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging()
            })
        }),
        []
    )
    console.log(isDragging, "dragging");



    return (
        <div ref={dragRef} className='space-y-4 py-7'>
            <p className={` flex items-center justify-center text-white border-2 bg-slate-500 p-4 w-[80%] mx-auto rounded-lg ${isDragging ? "bg-red-400" : "bg-slate-600"} `} >
                
                
                 {list} <MdDelete className='text-red-500 text-3xl' />
                
            </p>

        </div>
    );
};

export default TodoRow;