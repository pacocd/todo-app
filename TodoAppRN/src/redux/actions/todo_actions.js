import { SET_TODO_LIST_DATA } from './types';

export const setTodoListData = todoListData => {
  return {
    type: SET_TODO_LIST_DATA,
    todoListData
  };
};
