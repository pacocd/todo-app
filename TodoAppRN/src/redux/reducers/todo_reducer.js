import { SET_TODO_LIST_DATA } from '../actions/types';

const initialState = { todoListData: undefined };

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TODO_LIST_DATA: {
      const { todoListData } = action;
      return { ...state, todoListData };
    }
    default:
      return state;
  }
}
