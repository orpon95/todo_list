import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { authContext } from '../AuthProvider/AuthProvide';
import UseaxiosPublic from '../UseAxionPublic/UseaxiosPublic';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(authContext)
    const [UserInfo, setUserInfo] = useState("")
    const axiosPublic = UseaxiosPublic()
    const {
        register,
        handleSubmit,
       
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    // console.log("after posting data userinfo", res.data);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'sucessfully registered',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                // setUserInfo(result.user)
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.picURL
                })
                    // setUserInfo(result.user)
                    .then(() => {
                        const UserInfo = {
                            name: data.name,
                            email: data.email
                        }

                        // user info save to dbs
                        // axiosPublic.post("/v1/users", UserInfo)
                        //     .then(res => {
                        //         console.log("inside update pro", res.data);
                        //         if (res.data.insertedId) {
                        //             console.log("after posting data userinfo", res.data);
                        //             Swal.fire({
                        //                 position: 'top-center',
                        //                 icon: 'success',
                        //                 title: 'sucessfully registered',
                        //                 showConfirmButton: false,
                        //                 timer: 1500
                        //             })
                        //         }
                        //     })
                    })
                    .catch()



            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    {/* name field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                        {errors.name && <span className='text-red-500'>This field is required</span>}
                    </div>
                    {/* pic field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">photo url</span>
                        </label>
                        <input name='picURL' {...register("picURL", { required: true })} type="text" placeholder="enter your photo url" className="input input-bordered" />
                        {errors.picURL && <span className='text-red-500'>This field is required</span>}
                    </div>
                    {/* email field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required name='email' {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
                    </div>
                    {/* password field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required name='password' {...register("password", {
                            required: true,
                            minLength: 6,
                            //  pattern:/ (?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/

                        })} type="password" placeholder="password" className="input input-bordered" />
                        {errors.password?.type === "required" && (
                            <p role="alert">password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p role="alert">password required min 6 charecter</p>
                        )}
                        {/* {errors.password?.type === "pattern" && (
                            <p role="alert">password must have one uppper and one lower case and a number</p>
                        )} */}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {/* button */}
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className='my-5'>
                    <h1 className='text-center'>Alreay registered !!!
                        <Link to={"/Login"}><span className='text-base text-blue-600 underline'> log in here</span></Link>
                    </h1>
                </div>
            </div>

        </div>
    );
};

export default Register;