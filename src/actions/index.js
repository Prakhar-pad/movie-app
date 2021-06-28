export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVOURITE="ADD_FAVOURITE";

export function addMovies(data){
    return{
        type: ADD_MOVIES,
        movies: data
    }
}

export function addFavourite(movie){
    return{
        type: ADD_FAVOURITE,
        movie: movie
    }
}