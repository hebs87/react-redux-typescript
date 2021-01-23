import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {index} from './reducers';

export const store = createStore(index, applyMiddleware(thunk));
