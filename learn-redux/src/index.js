import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

//STORE -> GLOBALIZED STATE
//ACTION -> DISCRIB WHAT THE ACTION IS
//REDUCER -> CHANGE THE (STORE)STATE BASED ON WHAT ACTION I DID 
//DISPATCH ->SEND THE ACTION TO REDUCER

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
