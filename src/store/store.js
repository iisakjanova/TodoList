import { createStore, compose, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';

import tasksReducer from './redusers/tasksReduser';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(tasksReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

export default store;