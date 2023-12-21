/* eslint-disable react/prop-types */
import React from 'react';
import { useDrag, useDrop } from 'react-dnd'
import { MdDelete } from "react-icons/md";
import UseaxiosPublic from '../UseAxionPublic/UseaxiosPublic';
import Swal from 'sweetalert2';


const TodoRow = ({ data, refetch }) => {
    console.log(data, "todo data");
    const { title, des, deadline ,_id } = data
    const axionpublic = UseaxiosPublic()
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

    const handledelete = (id) => {
        axionpublic.delete(`/v1/lists/${id}`)

            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    refetch()


                }
            })

    }



    return (
        <div ref={dragRef} className='space-y-4 py-7 border-2 rounded-lg w-[80%] mx-auto bg-slate-500/60'>
            <p className={` flex items-center justify-center text-white border-2 bg-slate-500 p-4 w-[80%] mx-auto rounded-lg ${isDragging ? "bg-red-400" : "bg-slate-600"} `} >


               <p className='flex flex-col justify-center'> <span className='text-xl font-bold mx-3'>title:-</span>{title}</p>

            </p>
            <p className={` flex flex-col items-center justify-center text-white border-2 bg-slate-500 p-4 w-[80%] mx-auto rounded-lg ${isDragging ? "bg-red-400" : "bg-slate-600"} `}><span className='text-xl font-bold mx-3'>description:-</span>{des}</p>
            <p className={` flex flex-col items-center justify-center text-white border-2 bg-slate-500 p-4 w-[80%] mx-auto rounded-lg ${isDragging ? "bg-red-400" : "bg-slate-600"} `}><span className='text-xl font-bold mx-3'>deadline:-</span>{deadline}</p>
            <MdDelete onClick={() => handledelete(_id)} className='text-red-500 text-4xl mx-auto ' />

        </div>
    );
};

export default TodoRow;