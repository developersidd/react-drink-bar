import React, { useState, useEffect } from 'react'
import { drinkContext } from './../../App';
import SingleProducts from './../SingleProducts/SingleProducts';

const Products = () => {

    // fetching data
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setData(data?.drinks));
    }, [searchText])

    const handleEvent = (e) => {
        const text = e.target.value;
        setSearchText(text);
    }

    return (
        <div className="p-7 md:p-20">
            <h1 className="text-2xl  md:text-3xl lg:text-5xl font-bold text-center"> SEARCH YOUR DESIRE DRINK </h1>
            <div className="py-6 md:py-12 w-3/6 mx-auto">
                <input className="bg-gray-200 outline-none rounded-md focus:bg-white focus:shadow-md md:w-full py-4 px-4" type="text" onChange={handleEvent} placeholder="Search your favorite drink" />
            </div>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-12">
                {
                    data?.map(drink => <SingleProducts key={drink.idDrink} drink={drink} />)
                }
            </div>
        </div>
    )
}

export default Products
