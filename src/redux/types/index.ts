import {FetchTodosAction, DeleteTodoAction} from "../interfaces/todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
