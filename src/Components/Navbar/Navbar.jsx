import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvide';
import UseaxiosPublic from '../UseAxionPublic/UseaxiosPublic';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut, googlesign } = useContext(authContext)
    const nevigate = useNavigate()
    const location = useLocation()
    const [loggedinUser, setLoggedInUser] = useState('')
    const axiospublic = UseaxiosPublic()

    const handleSignOut = () => {
        logOut()
            .then(() => {
                setLoggedInUser('')
                const loggeduser = { email: user?.email }

                // clear coki start
                nevigate("/")



            })
            .catch(err => console.log(err))




    }


    // googlesign
    const handleGoole = () => {
        googlesign()
            .then(result => {
                setLoggedInUser(result.user)
                const loggeduser = result.user

                const UserInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }

                // user info save to dbs
                axiospublic.post("/v1/users", UserInfo)
                    .then(res => {
                        console.log("inside update pro", res.data);
                        if (res.data.insertedId) {
                            console.log("after posting data userinfo", res.data);

                        }
                    })
                nevigate(location?.state ? location.state : "/")
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'sucessfully loggedin',
                    showConfirmButton: false,
                    timer: 1500
                })

                // start

                // end
            })
            .catch(err => {
                console.log(err)
            })




    }
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300/75">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">TO DO list</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal font-bold text-xl">
                                {/* Navbar menu content here */}
                                <NavLink to={"/"} ><li><a>Home</a></li></NavLink>
                                <NavLink to={"/register"} ><li><a>register</a></li></NavLink>
                                {
                                    user ? <button onClick={handleSignOut} className='  m-2 underline'> sign out</button> :

                                        // <NavLink to={"/Login"}> <button className='btn'> Log in</button></NavLink>
                                        <NavLink to={"/login"}><button className='m-2  underline'> Log in</button></NavLink>


                                }

                                {/* <NavLink to={"/explore"} ><li><a>explore</a></li></NavLink> */}
                                <button className=' m-2 underline' onClick={handleGoole}>Sign in with google</button>
                                {
                                    user && <div className='flex items-center text-center gap-3'>
                                        <h1 className='underline p-2 rounded-lg font-bold'>
                                            {user?.displayName}
                                        </h1>
                                        <p className='self-center'><img className='w-3/6 h-[40px] rounded-full ' src={user?.photoURL} alt="" /></p>


                                    </div>
                                }


                            </ul>
                        </div>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full z-50 bg-base-200">
                        {/* Sidebar content here */}
                        <NavLink to={"/"} ><li><a>Home</a></li></NavLink>
                        <NavLink to={"/register"} ><li><a>register</a></li></NavLink>
                        {
                            user ? <button onClick={handleSignOut} className='btn mt-2 underline'> sign out</button> :

                                // <NavLink to={"/Login"}> <button className='btn'> Log in</button></NavLink>
                                <NavLink to={"/login"}><button className='btn  underline'> Log in</button></NavLink>


                        }

                        {/* <NavLink to={"/explore"} ><li><a>explore</a></li></NavLink> */}
                        <button className='btn  underline' onClick={handleGoole}>Sign in with google</button>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;