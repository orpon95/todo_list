import React from 'react';
import UseaxiosPublic from '../UseAxionPublic/UseaxiosPublic';
import Swal from 'sweetalert2';

const Home = () => {

    const axiosPublic = UseaxiosPublic()
    const handlesubmit = (e)=>{
        e.preventDefault()
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


    }
    return (
        <div>
            {/* input div */}
            <div>

                <form onSubmit={handlesubmit} action="">
                    <input type="text" placeholder="Type here" name='list' className="input input-bordered input-accent w-full max-w-xs" />
                    <input type="submit" value="Create" className='btn bg-cyan-400' />

                </form>



            </div>
            {/* list div */}
            <div>


            </div>

        </div>
    );
};

export default Home;