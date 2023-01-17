import React from 'react';
//import { drinkContext } from '../../App'
import useAuth from '../../Hooks/useAuth';
import "./Featured.css";
const FeaturedProducts = () => {
    const { data } = useAuth();
    return (
        <div className="px-8 md:px-20">
            <h1 className="text-2xl py-6 md:text-3xl lg:text-5xl font-bold text-center md:py-14">FEATURED PRODUCTS </h1>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-12">
                {
                    data.map(drink => {
                        return (
                            <div className="drink flex items-center justify-center flex-col">
                                <img className="drink-img w-52 rounded-full border-8 hover:border-green-500" src={drink.strDrinkThumb} alt={drink.strDrink} />
                                <h1 className="mt-6 text-xl font-semibold">{drink.strDrink} </h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedProducts
