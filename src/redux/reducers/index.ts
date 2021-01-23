import {combineReducers} from 'redux';
import {todosReducer} from "./todos";
import {StoreState} from "../interfaces/todos";

export const rootReducer = combineReducers<StoreState>({
  todos: todosReducer,
});
