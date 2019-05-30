import React from 'react';
import '../styles/styles.scss';
import RecipesContainer from '../containers/RecipesContainer.js';
import IngredientsContainer from '../containers/IngredientsContainer.js';


const Home = () => {
    return (
        <div className="home-container">
            <div className="home-title">
              <h4>Our recipes:</h4>
            </div>
              <RecipesContainer />
            <div className="home-title">
             <h4>Our favorite ingredients:</h4>
            </div>
             <IngredientsContainer /> {/* Component*/ }
        </div>
    )
}


export default Home;