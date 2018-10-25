import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';

const store = configureStore();

const rootElement = document.getElementById('app');
window.store