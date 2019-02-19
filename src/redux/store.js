import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import storeIni from './reducer';

const reducers = combineReducers({
  storeIni
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;