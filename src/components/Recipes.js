import React from 'react';
import { Link } from 'react-router-dom';


const Recipes = ({title, prep_time, rating, chef, main_image, id }) => {
    return (
        
        <div className="card">
          <Link to={`/recipes/${id}`}>
            <img className="card-image-recipe" alt={title} src={main_image.url} />
          </Link>
          <div className="card-container">
           <div className="card-container__title">{title}</div>
             <div className="box-rating-prep">
               <div className="rating">Rating: {rating} <i className="fas fa-star"></i></div>
               <div className="prep-time">{prep_time}</div>
             </div>
             <div className="card-container__content">
               <p>This is a preview Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit...</p>
             </div>
             <div className="card-container__chef">
               <img className="card-image-chef" alt={chef.full_name} src={chef.image.url} />  By {chef.full_name}
             </div>
          </div>
        </div>

    )
}

export default Recipes;