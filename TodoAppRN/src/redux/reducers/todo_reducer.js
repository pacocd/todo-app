import {
  SET_TODO_LIST_DATA,
  RESET_EDITING_FIELDS_DATA,
  SET_EDITING_FIELDS_DATA
} from '../actions/types';

const initialState = { todoListData: undefined, editingFieldsData: {} };

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TODO_LIST_DATA: {
      const { todoListData } = action;
      return { ...state, todoListData };
    }
    case SET_EDITING_FIELDS_DATA:
      const {
        editingFieldsData: { fieldName, value }
      } = action;
      return {
        ...state,
        editingFieldsData: {
          ...state.editingFieldsData,
          [`${fieldName}`]: value
        }
      };
    case RESET_EDITING_FIELDS_DATA:
      return { ...state, editingFieldsData: {} };
    default:
      return state;
  }
}
