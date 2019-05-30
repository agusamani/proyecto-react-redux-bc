import axios from 'axios';
import {
    GET_RECIPES,
    GET_RECIPES_SUCCESS,
    GET_RECIPES_ERROR,
    GET_INGREDIENTS,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
    GET_RECIPE,
    GET_RECIPE_SUCCESS,
    GET_RECIPE_ERROR,
    GET_INGREDIENT,
    GET_INGREDIENT_SUCCESS,
    GET_INGREDIENT_ERROR
} from './actionTypes';
import { baseURL } from '../api';



export const getIngredientById = (id) => {
    return dispatch => {
        dispatch({
          type: GET_INGREDIENT
        });

        return  axios.get(`${baseURL}/ingredients/${id}`)
          .then( res => {
              dispatch({
                  type: GET_INGREDIENT_SUCCESS,
                  ingredient: res.data
              });
          })
          .catch( error => {
              dispatch({
                  type: GET_INGREDIENT_ERROR,
                  error: error.res
              });
          });
    }
};


export const getRecipeById = (id) => {
    return dispatch => {
        dispatch({
          type: GET_RECIPE
        });

        return  axios.get(`${baseURL}/recipes/${id}`)
          .then( res => {
              dispatch({
                  type: GET_RECIPE_SUCCESS,
                  recipe: res.data
              });
          })
          .catch( error => {
              dispatch({
                  type: GET_RECIPE_ERROR,
                  error: error.res
              });
          });
    }
};


export const getIngredients = () => {
    return dispatch => {
        dispatch({
            type: GET_INGREDIENTS
        });

        return axios.get(`${baseURL}/ingredients`)
         .then( res => {
             dispatch({
                 type: GET_INGREDIENTS_SUCCESS,
                 ingredients: res.data
                });
           })
         .catch( error => {
             dispatch({
                 type: GET_INGREDIENTS_ERROR,
                 error: error.res
                });
           });
    }
};


export const getRecipes = () => {
    return dispatch => {
        dispatch({
            type: GET_RECIPES
        });

        return axios.get(`${baseURL}/recipes`)
         .then( res => {
             dispatch({
                 type: GET_RECIPES_SUCCESS,
                 recipes: res.data
             });
         })
         .catch( error => {
             dispatch({
                 type: GET_RECIPES_ERROR,
                 error: error.res
             });
         });
    }
};
