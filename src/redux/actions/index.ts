import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from "../types";
import {Todo, FetchTodosAction} from "../interfaces/todos";

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
