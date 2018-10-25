import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from './store';

const store = configureStore();

const rootElement = document.getElementById('app');
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
)

