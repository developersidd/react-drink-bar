import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Logout = () => {
    const { allContext: { logOut } } = useAuth();
    return (
        <div className="text-center">
            <h2 className="font-bold text-2xl text-green-400 mb-6">Your Are signed in successfully to ab drink shop </h2>
            <NavLink to="" onClick={logOut} className="bg-green-400 rounded-3xl px-6 py-3 font-semibold hover:bg-green-600"
            >Log out </NavLink>
        </div>
    )
}

export default Logout;