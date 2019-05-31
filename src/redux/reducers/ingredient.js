import {
    GET_INGREDIENT,
    GET_INGREDIENT_SUCCESS
} from '../actionTypes';

const initialState = {
    ingredient:[]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_INGREDIENT: {
            return {
                ...state,
                ingredient: []
            };

        }
        case GET_INGREDIENT_SUCCESS: {
            return {
                ...state,
                ingredient: action.ingredient
            };
        }
        default:
          return state;
    }
}