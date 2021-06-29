import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux';
import Posts from "./Posts"
import { createStore, applyMiddleware} from 'redux';
import postsReducer from "./reducer"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

const store=createStore(postsReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Posts/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
