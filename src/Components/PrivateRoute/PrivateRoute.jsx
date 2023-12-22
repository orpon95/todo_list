/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvide';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const { user, loading } = useContext(authContext)
    if (user) {
        return children
    }
    if (loading) {
        return <span className="loading loading-spinner loading-lg mx-auto"></span>
    }
    // return <Navigate state={location.pathname} to={"/Login"} ></Navigate>
    return <Navigate state={location.pathname} to={"/Login"}  ></Navigate>
};

export default PrivateRoute;