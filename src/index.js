import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { BrowserRouter } from 'react-router-dom';
import projectReducer from "./store/reducers/project";
import authReducer from "./store/reducers/auth";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";
//import registerServiceWorker from './registerServiceWorker';
const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
);

const app = (
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
