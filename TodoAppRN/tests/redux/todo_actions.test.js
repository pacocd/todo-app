import { setTodoListData } from '../../src/redux/actions';

describe('when todo actions are called', () => {
  it('calls setTodoListData to get correct type and todoListData', () => {
    expect(setTodoListData({})).toEqual({
      type: 'SET_TODO_LIST_DATA',
      todoListData: {}
    });
  });
});
