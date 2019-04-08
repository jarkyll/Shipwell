import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from "../reducers";
import { rootSaga } from "../sagas/saga";

// Intialize the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  const middlewares = [sagaMiddleware];

  let middleware = null;
  if (process.env.NODE_ENV === "development") {
    middleware = composeWithDevTools(applyMiddleware(...middlewares));
  } else {
    middleware = applyMiddleware(...middlewares);
  }

  const store = createStore(mainReducer, middleware);

  store.startSaga = saga => {
    sagaMiddleware.run(saga);
  };
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Let Webpack Hot Middleware also replace the reducers
    module.hot.accept("../reducers", () => {
      const newMainReducer = mainReducer;
      store.replaceReducer(newMainReducer);
    });
  }

  return store;
};
