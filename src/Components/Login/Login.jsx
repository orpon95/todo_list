import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvide';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Login = () => {
    const nevigate = useNavigate()
    const location = useLocation()

    const { signin } = useContext(authContext)
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        signin(data.email, data.password)
            .then(result => {
                const loggeduser = result.user

                // token start

                // token end

                console.log("loggen in user", result.user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'sucessfully Logged in',
                    showConfirmButton: false,
                    timer: 1500
                })

                nevigate(location?.state ? location.state : "/")

            })
            .catch(err => {
                console.log(err);

                Swal.fire({
                    title: `${errors}`,
                    text: '',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })

            })
    }
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">


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
                        <button type='submit' className="btn btn-primary">Login</button>
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

export default Login;