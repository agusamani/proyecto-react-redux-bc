import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
// import Recipe from './components/Recipe';
import Ingredient from './components/Ingredient';
import RecipeContainer from './containers/RecipeContainer';




const Routes = () => {
    return (
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/recipes/:id" component={RecipeContainer} />
          <Route exact path="/ingredients/:id" component={Ingredient} />
      </Switch>
      </BrowserRouter>
    )
}


export default Routes;