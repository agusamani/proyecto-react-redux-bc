import {
    GET_INGREDIENTS,
    GET_INGREDIENTS_SUCCESS
} from '../actionTypes';

const initialState = {
    isIngredientsLoading: true,
    ingredients: []
}

export default function( state = initialState, action) {
    switch(action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                isIngredientsLoading: true,
                ingredients: []
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                isIngredientsLoading: false,
                ingredients: action.ingredients
            };
        };
        default:
          return state;
    }
}