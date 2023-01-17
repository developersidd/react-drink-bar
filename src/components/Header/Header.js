import { faSearch, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Header = () => {
    const { allContext: { user: { displayName, email, photoURL } } } = useAuth();

    //icons
    const search = <FontAwesomeIcon icon={faSearch} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const logout = <FontAwesomeIcon icon={faSignOut} />
    return (
        <div className="bg-white shadow-md h-20 px-6 md:px-16  flex md:flex-row flex-col justify-center md:justify-between items-center">
            <div className="md:w-56">
                <img className="w-36 md:w-full " src="https://www.thecocktaildb.com/images/logo.png" alt="logo" />
            </div>
            <div>
                <nav>
                    <ul className="flex items-center gap-4 md:gap-8">
                        <li>
                            <NavLink to="/home" className="text-xs sm:text-sm md:text-base font-semibold" activeClassName="text-green-400 font-bold" >HOME </NavLink>
                        </li>
                        <li>
                            <NavLink className=" text-xs sm:text-sm md:text-base font-semibold" activeClassName="text-green-400 font-bold" to="/drinks">SHOP </NavLink>
                        </li>
                        <li>
                            <NavLink className=" text-xs sm:text-sm md:text-base font-semibold" activeClassName="text-green-400 font-bold" to="featured">FEATURED </NavLink>
                        </li>

                        {
                            !displayName &&
                            <li>
                                <NavLink className=" text-xs sm:text-sm md:text-base font-semibold" activeClassName="text-green-400 font-bold" to="/login">LOGIN </NavLink>
                            </li>
                        }

                        <li>
                            <NavLink className=" text-xs sm:text-sm md:text-base font-semibold" activeClassName="text-green-400 font-bold" to="/contact">CONTACT </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="hidden md:block">
                <ul className=" flex items-center">

                    <li className="text-xl hover:text-green-400 mr-4">
                        <NavLink to="/drinks"> {search}   </NavLink>
                    </li>

                    {
                        displayName &&

                        <>
                            <li className="text-xl hover:text-green-400 mr-4">
                                <NavLink to="/logout"> {logout}   </NavLink>
                            </li>

                            <li className="text-xl hover:text-green-400 mr-4">
                                <NavLink to="/login"> {userIcon}   </NavLink>
                            </li>
                        </>
                    }

                    <li>
                        <img className="mr-2 w-10 rounded-full" src={photoURL} alt="" />
                    </li>

                    <li className="text-lg hover:text-green-400">
                        <h3>{displayName} </h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
