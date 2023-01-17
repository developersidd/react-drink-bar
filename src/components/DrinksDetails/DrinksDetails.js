import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const DrinksDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    console.log(id);
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setData(data?.drinks));
    }, [])

    return (
        <div>
            {
                data?.map(drink => {
                    const { idDrink, strDrink, strDrinkThumb, strCategory } = drink;
                    return (
                        <div className="flex mx-20 gap-10 my-10 shadow-lg rounded-md p-8 bg-gray-50">
                            <div className="w-1/3">
                                <img className="w-full rounded-md h-72" src={strDrinkThumb} alt={strDrink} />
                            </div>
                            <div className="w-2/4">
                                <h3 className="text-2xl text-left font-semibold">{strDrink} </h3>
                                <h3 className="text-2xl text-left font-semibold">{idDrink} </h3>
                                <h3 className="text-2xl text-left font-semibold">{strCategory} </h3>
                                <p className="mb-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos eum deleniti ratione odit minus voluptate labore temporibus recusandae impedit iste maxime beatae aliquid, dolor iure officia voluptates ullam voluptas!</p>
                                <a href="" className="bg-green-400 rounded-3xl px-8 py-3 font-semibold hover:bg-green-600" >
                                    add to cart
                                </a>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DrinksDetails
