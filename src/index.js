import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers';

const logger=({dispatch, getState})=>(next)=>(action)=>{
    //looger code
    if(typeof action !=='function'){
        console.log("ACTION_TYPE=", action.type);
    }
    next(action);
}

// const thunk=({dispatch, getState})=>(next)=>(action)=>{
//     //thunk code
//     if(typeof action ==='function'){
//         action(dispatch);
//         return;
//     }
//     next(action);
// }

const store=createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);


ReactDOM.render(<App store={store}/>, document.getElementById('root'));


