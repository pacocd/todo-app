import {
  SET_TODO_LIST_DATA,
  SET_EDITING_FIELDS_DATA,
  RESET_EDITING_FIELDS_DATA
} from './types';

export const setTodoListData = todoListData => {
  return {
    type: SET_TODO_LIST_DATA,
    todoListData
  };
};

export const setEditingFieldsData = (fieldName, value) => {
  const editingFieldsData = {
    fieldName,
    value
  };

  return {
    type: SET_EDITING_FIELDS_DATA,
    editingFieldsData
  };
};

export const resetEditingFieldsData = () => {
  return { type: RESET_EDITING_FIELDS_DATA };
};
