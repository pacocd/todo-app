import {
  setTodoListData,
  setEditingFieldsData,
  resetEditingFieldsData
} from '../../src/redux/actions';

describe('when todo actions are called', () => {
  it('calls setTodoListData to get correct type and todoListData', () => {
    expect(setTodoListData({})).toEqual({
      type: 'SET_TODO_LIST_DATA',
      todoListData: {}
    });
  });

  it('calls setEditingFieldsData to update edited fields', () => {
    expect(setEditingFieldsData('test', 12)).toEqual({
      type: 'SET_EDITING_FIELDS_DATA',
      editingFieldsData: { fieldName: 'test', value: 12 }
    });
  });

  it('calls resetEditingFieldsData to reset stored data from todos editing fields', () => {
    expect(resetEditingFieldsData()).toEqual({
      type: 'RESET_EDITING_FIELDS_DATA'
    });
  });
});
