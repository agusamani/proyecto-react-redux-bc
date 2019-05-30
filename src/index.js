import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';



const finalCreateStore = compose(
    applyMiddleware(thunk),
    window._REDUX_DEVTOOLS_EXTENSION__ ? window._REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore);


    const store = finalCreateStore(rootReducer);

ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
