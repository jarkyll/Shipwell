import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './components/app'
// import configureStore from './store';

// const store = configureStore();

const rootElement = document.getElementById('app');
// window.store = store;
import { hot } from "react-hot-loader";
import { BrowserRouter } from 'react-router-dom';

const App = () => (<BrowserRouter><div>fsdhufahf</div></BrowserRouter>)
export default hot(module)(App);
ReactDOM.render(
    <h1>Hello, world!</h1>,
    rootElement
  );

