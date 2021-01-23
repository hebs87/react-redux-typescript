import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from "../types";
import {DeleteTodoAction, FetchTodosAction, Todo} from "../interfaces/todos";

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.deleteTodo,
  payload: id
});
