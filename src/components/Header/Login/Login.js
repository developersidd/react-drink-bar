import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import "./Login.css";

const Login = () => {
    const { allContext:
        { signInGoogle, SignInGithub, userSignIn, setEmail, setPassword, error, setUser, setError } }
        = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state?.from);
    const redirect_url = location.state?.from || "/";

    const handleUserSignIn = (e) => {
        e.preventDefault();
        userSignIn()
            .then(result => {
                navigate(redirect_url);
                setUser(result.user);
            }).catch(error => {
                setError(error.message);
            })
    }

    const googleSignIn = (e) => {
        e.preventDefault();
        signInGoogle()
            .then(result => {
                navigate(redirect_url);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const githubSignIn = (e) => {
        e.preventDefault();
        SignInGithub()
            .then(result => {
                navigate(redirect_url);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="mx-4 flex items-center justify-center login-form my-8">
            <div className="bg-white mx-auto  rounded-md overflow-hidden shadow-xl">
                <h3 className="text-center text-blue-500 text-2xl my-4 font-semibold">SIGN IN </h3>
                <div className="">
                    <div className="px-6 py-2">
                        <input onBlur={getEmail} className="border-2 rounded-full block w-full px-4 py-3 mb-4 outline-none" type="email" placeholder="Your Email" />
                        <input onBlur={getPassword} className="border-2 rounded-full block w-full px-4 py-3 mb-6 outline-none" type="password" placeholder="Your password" />
                        <div className="flex flex-col items-center md:flex-row">
                            <button onClick={handleUserSignIn} className="px-8 md:mr-2 mb-3 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600  text-white shadow-lg">
                                Sing In </button>
                            <p className="inline-block pb-2">New to AB Drink Shop?<NavLink to="/register" className="text-blue-500 cursor-pointer">Register </NavLink> </p>
                            <span className="text-red-500 text-center">{error} </span>
                        </div>
                    </div>

                    <div className="p-3">
                        <h4 className="text-blue-500 text-lg text-center font-medium">Or sign in with </h4>
                        <ul className="flex items-center justify-center py-3 gap-5 text-blue-500 text-lg">
                            <li><span onClick={googleSignIn} > <FaGoogle /> </span></li>
                            <li><span onClick={githubSignIn} > <FaGithub /> </span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;