import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'react-devtools-extension';
import mainReducer from '../reducers';

export const configureStore = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV) ===
}