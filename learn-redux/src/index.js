import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { creatStore, createStore } from 'redux';

//STORE -> GLOBALIZED STATE
//ACTION -> DISCRIB WHAT THE ACTION IS
//REDUCER -> CHANGE THE (STORE)STATE BASED ON WHAT ACTION I DID 
//DISPATCH ->SEND THE ACTION TO REDUCER

//ACTION
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

//ACTION
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER
const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state -1;
    //default  
  }
};

let store = createStore(counter);

//Dispaly it in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
