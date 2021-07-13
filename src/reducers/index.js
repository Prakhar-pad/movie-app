import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import {
  ADD_MOVIES,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
  ADD_SEARCH_RESULT,
  ADD_MOVIE_TO_LIST,
  ADD_ROW_DATA,
} from '../actions';

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_FROM_FAVOURITES:
      const fileteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );

      return {
        ...state,
        favourites: fileteredArray,
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };

    default:
      return state;
  }
}

const initialAgGridState = {
  rowData: [
    {
      moviename: 'Avengers',
      actor: 'Tony Stark',
      description: 'Science fiction',
    },
    { moviename: 'Superman', actor: 'Henry', description: 'Thriller' },
    { moviename: 'Hulk', actor: 'Banner', description: 'Adventurous' },
  ],
};

export function agGridData(state = initialAgGridState, action) {
  switch (action.type) {
    case ADD_ROW_DATA:
      return {
        ...state,
        rowData: [action.rowData, ...state.rowData],
      };
    default:
      return state;
  }
}

// const initialRootState={
//     movies:initialMovieState,
//     search: initialSearchState
// }

// export default function rootReducer(state=initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
  movies: movies,
  search: search,
  form: reduxFormReducer,
  agGridData: agGridData,
});
