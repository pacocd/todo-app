import todoReducer from '../../src/redux/reducers/todo_reducer';
import {
  setTodoListData,
  setEditingFieldsData,
  resetEditingFieldsData
} from '../../src/redux/actions/todo_actions';

describe('when todoReducer returns default state', () => {
  it('initializes properly', () => {
    expect(todoReducer(undefined, {})).toEqual({
      todoListData: undefined,
      editingFieldsData: {}
    });
  });
});

describe('when todoReducer receives actions and state is modified', () => {
  it('generates an action to set todoListData', () => {
    const todoListData = [
      { id: 1, user_id: 1, title: 'test', completed: false }
    ];
    expect(todoReducer(undefined, setTodoListData(todoListData))).toEqual({
      todoListData,
      editingFieldsData: {}
    });
  });

  it('generate an action to set editingFieldsData', () => {
    expect(todoReducer(undefined, setEditingFieldsData('test', 1))).toEqual({
      editingFieldsData: { test: 1 },
      todoListData: undefined
    });
  });

  it('generate an action to reset editingFieldsData', () => {
    expect(
      todoReducer({ editingFieldsData: { test: 1 } }, resetEditingFieldsData())
    ).toEqual({
      editingFieldsData: {}
    });
  });
});
