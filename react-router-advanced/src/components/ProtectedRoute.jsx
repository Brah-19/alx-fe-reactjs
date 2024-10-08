import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from '../assets/contexts/AuthContext';

const ProtectRoute = () => {
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet/>
}

export default ProtectRoute;