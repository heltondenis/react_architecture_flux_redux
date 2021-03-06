import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import reducers from "./reducers";
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composer = process.env.NODE_ENV === "development"
  ? compose(
    applyMiddleware(...middleware),
    console.tron.createEnhancer()
  )
  : applyMiddleware(...middleware);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
