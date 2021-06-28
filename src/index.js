import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import movies from './reducers';

const store=createStore(movies);
console.log('store', store);
console.log('Before STATE',store.getState());

store.dispatch({
    type: "ADD_MOVIES",
    movies: [{name: "Super Man"}]
});

console.log('After STATE',store.getState());

ReactDOM.render(<App/>, document.getElementById('root'));


