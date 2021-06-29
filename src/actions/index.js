export const ADD_MOVIES="ADD_MOVIES";
export const ADD_TO_FAVOURITE="ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITES="REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES="SET_SHOW_FAVOURITES";


export function addMovies(data){
    return{
        type: ADD_MOVIES,
        movies: data
    }
}

export function addFavourite(movie){
    return{
        type: ADD_TO_FAVOURITE,
        movie: movie
    }
}

export function removeFromFavourites(movie){
    return{
        type: REMOVE_FROM_FAVOURITES,
        movie: movie
    }
}

export function setShowFavourites(val){
    return{
        type: SET_SHOW_FAVOURITES,
        val: val
    }
}