import Button from '@restart/ui/esm/Button'
import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from './../../Hooks/useAuth';

const Register = () => {
    const { allContext: { setName, setEmail, setPassword, registeredUser, createUser, registerError } } = useAuth();
    console.log(registeredUser);
    const getName = (e) => {
        setName(e.target.value);
    }

    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const registerUser = () => {
        createUser();
    }

    return (
        <div className="flex items-center justify-center my-4">
            {
                !registeredUser?.displayName ?
                    <div className="bg-white  rounded-md overflow-hidden shadow-xl">
                        <h3 className="text-center text-blue-500 text-2xl mt-8 font-semibold">SIGN UP </h3>
                        <div>
                            <div className="p-8">
                                <input onBlur={getName} className="border-2 rounded-full block w-full px-4 py-3 mb-3 outline-none" type="text" placeholder="Your Name" />
                                <input onBlur={getEmail} className="border-2 rounded-full block w-full px-4 py-3 my-4 outline-none" type="email" placeholder="Your Email" />
                                <input onBlur={getPassword} className="border-2 rounded-full block w-full px-4 py-3 my-3 outline-none" type="password" placeholder="Your password" />
                                <span className="text-red-500 text-center">{registerError} </span>
                                <div className="my-4">
                                    <input className="w-7 h-4" type="checkbox" name="" id="terms" />
                                    <label htmlFor="terms">Accepts The <span className="text-blue-500">Terms & Condition </span> </label>
                                </div>
                                <Button onClick={registerUser} className="px-8 mr-2 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600  text-white shadow-lg">Sing Up </Button>
                                <p className="inline-block pb-2">Already have an account?<NavLink to="/login" className="text-blue-500 cursor-pointer">Login </NavLink> </p>
                            </div>

                        </div>
                    </div> :
                    <div className="text-center">
                        <h2 className="font-bold text-2xl text-green-400 mb-6">Your Are signed up successfully to ab drink shop.</h2>
                        <NavLink to="/login" className="bg-green-400 rounded-3xl px-6 py-3 font-semibold hover:bg-green-600"
                        >Log in </NavLink>
                    </div>
            }
        </div>
    )
}

export default Register
