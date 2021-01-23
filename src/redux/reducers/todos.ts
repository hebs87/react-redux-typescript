import {Todo, FetchTodosAction} from "../interfaces/todos";
import {ActionTypes} from "../types";

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
