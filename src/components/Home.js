import React from 'react';
import '../styles/styles.scss';
import RecipesContainer from '../containers/RecipesContainer.js';
import IngredientsContainer from '../containers/IngredientsContainer.js';


const Home = () => {
    return (
        <div className="home-container">
            <div className="home-title">
              <h1>Our recipes:</h1>
            </div>
              <RecipesContainer />
            <div className="home-title">
             <h1>Our favorite ingredients:</h1>
            </div>
             <IngredientsContainer />
        </div>
    )
}


export default Home;