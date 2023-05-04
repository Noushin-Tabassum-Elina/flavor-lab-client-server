import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefsCard = () => {

  const [chefs, setChefs] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    fetch('http://localhost:5000/chefs')
      .then(res => res.json())
      .then(data => {
        setChefs(data.chefs);
        isLoading(false);
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <h1 className='text-center font-bold text-4xl mt-16 mb-12'>Meet Our CHEFS!!</h1>
      {loading && <progress className="progress w-56"></progress>}
      <div className='grid grid-cols-1 lg:grid-cols-3 m-8 gap-6 '>
        {
          chefs.map(recipe => {
            return (
              <div className="card w-96 bg-base-100 shadow-xl">

                <figure className="px-10 pt-10">
                  <LazyLoad height={130} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img src={recipe.chef_picture} alt="Shoes" className="rounded-xl h-32 w-28 object-cover" />
                  </LazyLoad>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{recipe.chef_name}</h2>
                  <p>Years of experience {recipe.chef_experience}</p>
                  <p>Number of recipe {recipe.recipe_number}</p>
                  <p>Like: {recipe.likes}</p>
                  <div className="card-actions">
                    <Link to={`/chefs/${recipe.chef_id}`} className="btn btn-outline btn-info">View Recipe</Link>
                  </div>
                </div>
              </div>)
          })
        }
      </div>
    </div>
  );
};

export default ChefsCard;
