import { combineReducers } from 'redux';
import recipes from './recipes';
import ingredients from './ingredients';
import recipe from './recipe';
import ingredient from './ingredient';

export default combineReducers({ recipes, ingredients, recipe, ingredient });