import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'react-devtools-extension';
import mainReducer from '../reducers';

const 