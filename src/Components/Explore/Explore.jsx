import React, { useState } from 'react';
import UseaxiosPublic from '../UseAxionPublic/UseaxiosPublic';
import Swal from 'sweetalert2';
import TodoRow from '../TodoRow/TodoRow';
import { useQuery } from '@tanstack/react-query';
// import { withAxios } from 'react-axios';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider, useDrop } from 'react-dnd'
import Progressdivinfo from './Progressdivinfo';


const Explore = () => {
    const axiosPublic = UseaxiosPublic()
    const [listdata, setdata] = useState([])
    const [progressdata, setprogressdata] = useState([])

    
    // console.log(datas, 'datas');
    const handlesubmit = (e) => {
        // e.preventDefault()
        const form = e.target
        const title = form.title.value
        const des = form.des.value
        const deadline = form.deadline.value


        const lists = { title, des, deadline }
        console.log(lists, "list");




        axiosPublic.post("/v1/lists", lists)
            .then(res => {
                console.log("response", res.data);
                // console.log("insertedid",res.data.result.insertedId);
                // console.log("timestamp",res.data.timestamp);

                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'surveys added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                else {
                    Swal.fire({
                        title: 'error!',
                        text: 'something wrong ,pls try again',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })


                }

            })


        // axiosPublic.get("/v1/listsInfo")
        // .then(res => 
        //     {
        //         setdata(res.data)

        //     }
        //     )


    }

    const { data: datas, isLoading, isFetching, isPending, refetch } = useQuery({
        queryKey: ["listinfo"],
        queryFn: async () => {
            const res = await axiosPublic.get('/v1/listsInfo')



            return await res.data
        }




    })
    console.log(datas, "datas")
    // // dnd
    // const [{ isOver }, drop] = useDrop(
    //     () => ({
    //       accept: "task",
    //       drop: datas?.map((item)=> { addotemTSection(item._id)}),
    //       collect: (monitor) => ({
    //         isOver: !!monitor.isDragging()
    //       })
    //     }),
    //     []
    //   )
    //   const addotemTSection =(id)=>{
    //     console.log(id,"dropped id");
    //   }



    // final dnd start
    // dnd
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: "task",
            drop:(item)=> addimagetoProgress(item.id),
            // item: { id: _id },
            collect: (monitor) => ({
                isOver: !!monitor.isOver()
            })
        }),
        []
    )

    const addimagetoProgress = (id)=>{
        console.log(id, "dropped id");
        const filteredData = datas?.filter((data)=> data._id === id )
        if(filteredData?.length > 0){
            setprogressdata((board)=> [...board,filteredData[0]])
        }

    }
    // final dnd end
    return (
        <>
            
                <div  >
                    {/* input div */}
                    <div className='text-center my-7 '>

                        <h1 className='text-3xl font-black text-center my-6 text-white' >create your task</h1>

                        <form onSubmit={handlesubmit} className='flex flex-col justify-center items-center space-y-7 border-4 border-cyan-300 rounded-lg py-10' action="">
                            <input type="text" placeholder="Type Your title" name='title' className="input input-bordered input-accent w-full max-w-xs" />
                            <input type="text" placeholder="Type descripton" name='des' className="input input-bordered input-accent w-full max-w-xs" />
                            <input type="text" placeholder="Type deadline" name='deadline' className="input input-bordered input-accent w-full max-w-xs" />
                            <input type="submit" value="Create" className='btn bg-cyan-400' />

                        </form>



                    </div>
                    {/* list div */}
                    <div className=' flex flex-col lg:flex-row h-max gap-10 my-6 '>

                        {/* to do  div */}

                        <div className=' grid grid-cols-1  border-2 w-full lg:w-[50%] h-max p-6 '>
                            <h1 className='text-center text-2xl font-black my-8 text-white '> TO DO</h1>
                            {
                                datas?.map((data) => <TodoRow key={data._id} data={data} refetch={refetch} ></TodoRow>)
                            }


                        </div>
                        {/* progress div */}

                        <div ref={drop} className='border-2 w-full lg:w-[50%] h-screen  '  >
                            <h1 className='text-center text-2xl font-black my-8 text-white'> On progress</h1>
                            {
                                progressdata?.map((data) => <TodoRow key={data._id} data={data} refetch={refetch} ></TodoRow> )
                            }



                        </div>
                        {/* completed div */}
                        <div ref={drop} className='border-2 w-full lg:w-[50%] h-screen  '  >
                            <h1 className='text-center text-2xl font-black my-8 text-white '> COmpleted</h1>
                            {
                                progressdata?.map((data) => <TodoRow key={data._id} data={data} refetch={refetch} ></TodoRow> )
                            }



                        </div>


                    </div>

                </div>

           


        </>
    );
};

export default Explore;