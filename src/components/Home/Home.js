import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import FeaturedPRoducts from '../FeaturedProducts/FeaturedProducts';
import Products from '../Products/Products';
import "./Home.css";

const Home = () => {
    const cart = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    return (
        <div>
            <div className="banner text-center">
                <div className="flex h-screen items-center justify-center">
                    <div className="text-white">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold heading leading-tight"> DRINK FRESH <br /> FIGHT FOOD WASTE</h1>
                        <p className="text-gray-200 text-sm  md:text-lg mt-3 mb-6"> We will share all the fresh drink, fruit and veg with you.</p>
                        <NavLink className="bg-black px-12 py-4 font-semibold hover:bg-green-600" to="/drinks"> {cart} Shop Now </NavLink>
                    </div>
                </div>
            </div>

            <main>
                <section className="py-16">
                    <FeaturedPRoducts />
                </section>
                <section>
                    <Products />
                </section>
            </main>
        </div>
    )
}

export default Home
