import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { AiOutlineHeart } from "react-icons/Ai";


const Chef = () => {
    const chef = useLoaderData();
    console.log(chef)

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.success('Added to favorites!');
    };

    return (
        <div className='mt-20 mb-16 mx-auto'>

            <div className=" bg-gradient-to-r from-cyan-800 to-cyan-400 text-white shadow-xl rounded-lg p-8">
                <div><Toaster /></div>
                <h1 className='text-4xl font-bold text-center mb-4'><i>Details</i></h1>
                <figure className="mx-auto mb-8 w-40">
                    <img src={chef.chef_picture} alt="chef" className="rounded-xl h-32 w-28 object-cover" />
                </figure>
                <div className=" items-center text-center text-pink-950">
                    <h2 className="text-xl font-bold">{chef.chef_name}</h2>
                    <p><i>{chef.chef_description}</i></p>
                    <p><b>Years of experience: </b> {chef.chef_experience}</p>
                    <p><b>Number of recipe: </b> {chef.recipe_number}</p>
                    <p><b>Like: </b>{chef.likes}</p>
                    
                    <div>
                        <button disabled={isFavorite} onClick={handleFavoriteClick} className="btn btn-outline btn-secondary m-4"><AiOutlineHeart /></button>
                    </div>
                </div>

            </div>
            <div>

                <div>
                    <h1 className='text-4xl font-bold text-center my-8'>CheckOut our Chef's Special recipe</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 lg:ms-48">
                        {chef.recipe_info.map((recipe, index) => (
                            <div
                                className={`bg-white shadow-xl rounded-lg p-6 w-96`}
                                key={index}
                            >
                                <h2 className="text-lg font-bold mb-2">{recipe.recipe_name}</h2>
                                <ul className="list-disc pl-4">
                                    {recipe.ingredients.map((ingredient, i) => (
                                        <li key={i}>{ingredient}</li>
                                    ))}
                                </ul>
                                <p className="mt-2">
                                    <b>Cooking method: </b>
                                    {recipe.cooking_method}
                                </p>
                                <p className="mt-2">
                                    <b>Rating: </b>
                                    {recipe.rating}
                                </p>
                                <button
                                    disabled={isFavorite[index]}
                                    onClick={() => handleFavoriteClick(index)}
                                    className="btn btn-outline btn-secondary mt-4"
                                >
                                    <AiOutlineHeart />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chef;
