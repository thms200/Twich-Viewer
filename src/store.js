import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers';

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

export default createStore(
  combineReducers, 
  applyMiddleware(...middleware)
);
