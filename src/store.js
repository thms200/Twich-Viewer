import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers';

export default createStore(
  combineReducers, 
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);
