import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'react-devtools-extension';
import mainReducer from '../reducers';

export const configureStore = () => {
    const middlewares = [thunk];

    let middleware = null;
    if (process.env.NODE_ENV === 'development') {
        middleware = composeWithDevTools(applyMiddleware(...middlewares))
    } else {
        middleware = applyMiddleware(...middlewares);
    }

    const store = createStore(mainReducer, middleware);

    if (module.hot) {
        // Let Webpack Hot Middleware also replace the reducers
        module.hot.accept('../reducers', () => {
            
        })
    }
}