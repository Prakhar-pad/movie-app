import {ADD_MOVIES} from '../actions';

const initialMovieState={
    list:[],
    favourite: []
}

function movies(state=initialMovieState ,action){
    if(action.type===ADD_MOVIES){
        return {
            ...state,
            list:action.movies
        };
    }
    return state;
}

export default movies;