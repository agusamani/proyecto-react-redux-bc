import React from 'react';
import '../styles/styles.scss';


export const Header = () => (
    <header>
    <div className="header-container">
      <div>
        <a href="/" className="header-container__home">Home</a>
      </div>
      <div className="header-container__recipes">
       The Best Recipes
      </div>
    </div>
  </header>
)

