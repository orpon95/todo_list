import React, { useState } from 'react';
import UseaxiosPublic from '../UseAxionPublic/UseaxiosPublic';
import Swal from 'sweetalert2';
import TodoRow from '../TodoRow/TodoRow';
import { useQuery } from '@tanstack/react-query';
// import { withAxios } from 'react-axios';

const Home = () => {

    const axiosPublic = UseaxiosPublic()
    // const [datas, setdata] = useState([])
    // console.log(datas, 'datas');
    const handlesubmit = (e)=>{
        // e.preventDefault()
        const form = e.target
        const list = form.list.value
        console.log(list,"list");

        const lists = { list}
        
 


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

    const { data :datas, isLoading, isFetching, isPending, refetch } = useQuery({
        queryKey: ["listinfo"],
        queryFn: async () => {
            const res = await axiosPublic.get('/v1/listsInfo')



            return await res.data
        }
        
        


    })
    console.log(datas,"datas")
   
    
    return (
        <div >
            {/* input div */}
            <div className='text-center'>

                <form onSubmit={handlesubmit} action="">
                    <input type="text" placeholder="Type here" name='list' className="input input-bordered input-accent w-full max-w-xs" />
                    <input type="submit" value="Create" className='btn bg-cyan-400' />

                </form>



            </div>
            {/* list div */}
            <div className=' flex h-[70vh] gap-10 my-6 '>

                {/* to do  div */}

                <div className='border-2 w-[50%] h-full '>
                    {
                        datas?.map((data)=> <TodoRow key={data._id} data={data} ></TodoRow> )
                    }


                </div>
                {/* progress div */}

                <div className='border-2 w-[50%] h-full '>
                    hi


                </div>
                {/* completed div */}
                <div  className='border-2 w-[50%] h-full '>
                    hello


                </div>


            </div>

        </div>
    );
};

export default Home;