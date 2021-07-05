import React , {createContext} from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

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

// export const StoreContext=createContext();
// console.log('StoreCotext', StoreContext);

// class Provider extends React.Component{
//     render(){
//         const {store}=this.props;
//         return(
//             <StoreContext.Provider value={store}>
//                 {this.props.children}
//             </StoreContext.Provider>
//         );
//     }
// }


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root')
);


