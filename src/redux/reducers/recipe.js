import {
    GET_RECIPE,
    GET_RECIPE_SUCCESS
} from '../actionTypes';

const initialState = {
    recipe:[],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_RECIPE: {
            return {
                ...state,
                recipe: []
            };

        }
        case GET_RECIPE_SUCCESS: {
            return {
                ...state,
                recipe: action.recipe
            };
        }
        default:
          return state;
    }
}