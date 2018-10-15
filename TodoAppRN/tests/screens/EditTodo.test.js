import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  EditTodo,
  mapDispatchToProps,
  mapStateToProps
} from '../../src/screens/EditTodo';

configure({ adapter: new Adapter() });

describe('when redux state functions are called', () => {
  it('calls mapStateToProps to get editingFieldsData from todos', () => {
    expect(mapStateToProps({ todos: { editingFieldsData: {} } })).toEqual({
      editingFieldsData: {}
    });
  });

  it('calls mapDispatchToProps to ensure it returns an instance of Object', () => {
    expect(mapDispatchToProps(jest.fn())).toBeInstanceOf(Object);
  });
});

describe('when EditTodo is fully rendered', () => {
  const todoListDataMock = [
    { id: 1, title: 'test', user_id: 1, completed: false }
  ];
  const props = {
    navigation: {
      state: {
        params: { todo: { id: 1, title: 'test', user_id: 1, completed: false } }
      },
      popToTop: jest.fn()
    },
    updateTodo: jest
      .fn()
      .mockReturnValue(new Promise(resolve => resolve({ status: 200 }))),
    getTodoList: jest.fn().mockReturnValue(
      new Promise(resolve =>
        resolve({
          data: todoListDataMock,
          status: 200
        })
      )
    ),
    hasError: jest.fn().mockReturnValue(false),
    resetEditingFieldsData: jest.fn(),
    editingFieldsData: {}
  };
  const wrapper = shallow(<EditTodo {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
