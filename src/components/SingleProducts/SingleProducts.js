import React from 'react'
import { NavLink } from 'react-router-dom';

const SingleProducts = ({ drink }) => {
    drink.price = "price";
    console.log(drink)
    const { idDrink, strDrink, strDrinkThumb } = drink
    return (
        <div className="text-center">
            <div className="flex items-center justify-center flex-col bg-gray-100 p-10 rounded-md mb-3">
                <img className="drink-img w-36 rounded-full border-8 border-white" src={strDrinkThumb} alt={strDrink} />
            </div>
            <div>
                <h3 className="mb-5">{strDrink} </h3>
                <NavLink className="bg-green-400 rounded-3xl px-6 py-3 font-semibold hover:bg-green-600"
                    to={`/drinks_details/${idDrink}`}>

                    See Details </NavLink>
            </div>
        </div>
    )
}

export default SingleProducts
