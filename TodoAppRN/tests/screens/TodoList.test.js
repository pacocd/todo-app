import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  TodoList,
  mapDispatchToProps,
  mapStateToProps
} from '../../src/screens/TodoList';
import TodoListItem from '../../src/components/TodoListItem';

configure({ adapter: new Adapter() });

describe('when redux state functions are called', () => {
  it('calls mapStateToProps to get todoListData from todos', () => {
    expect(mapStateToProps({ todos: { todoListData: [] } })).toEqual({
      todoListData: []
    });
  });

  it('calls mapDispatchToProps to get a new object', () => {
    const dispatchMock = jest.fn();
    expect(mapDispatchToProps(dispatchMock).setTodoListData).toBeInstanceOf(
      Function
    );
  });
});

describe('when TodoList is fully rendered', () => {
  const todoListDataMock = [
    { id: 1, title: 'test', user_id: 1, completed: false }
  ];
  const props = {
    navigation: {},
    getTodoList: jest.fn().mockReturnValue(
      new Promise(resolve =>
        resolve({
          data: todoListDataMock,
          status: 200
        })
      )
    ),
    hasError: jest.fn().mockReturnValue(false),
    setTodoListData: jest.fn(),
    todoListData: todoListDataMock
  };
  const wrapper = shallow(<TodoList {...props} />);

  beforeAll(async () => {
    await wrapper.instance().props.getTodoList();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expects getTodoList prop function to have been called', () => {
    expect(wrapper.instance().props.getTodoList).toHaveBeenCalled();
  });

  it('returns an error in getTodoList response', () => {
    expect(wrapper.instance().props.hasError).toHaveBeenCalledWith({
      status: 200,
      data: todoListDataMock
    });
  });

  it('expects setTodoListData to have been called with data from getTodoList', () => {
    expect(wrapper.instance().props.setTodoListData).toHaveBeenCalledWith(
      todoListDataMock
    );
  });

  it('calls keyExtractor and expect to extract id of item as String', () => {
    const item = { id: 1 };
    expect(wrapper.instance().keyExtractor(item)).toBe('1');
  });

  it('calls renderListItem to get TodoListItem', () => {
    const itemData = {
      item: { id: 1, title: 'test', user_id: 1, completed: false }
    };
    expect(wrapper.instance().renderListItem(itemData)).toEqual(
      <TodoListItem todo={itemData.item} />
    );
  });

  it('expects todoFlatList to be rendered', () => {
    expect(
      wrapper
        .find('.todoListView')
        .find('.todoFlatList')
        .exists()
    ).toBeTruthy();
  });

  it('expects activityIndicatorView to not be rendered', () => {
    expect(wrapper.find('.activityIndicatorView').exists()).toBeFalsy();
  });
});

describe('when TodoList is loading', () => {
  const todoListDataMock = [
    { id: 1, title: 'test', user_id: 1, completed: false }
  ];
  const props = {
    navigation: {},
    getTodoList: jest.fn(),
    hasError: jest.fn().mockReturnValue(true),
    setTodoListData: jest.fn(),
    todoListData: undefined
  };
  const wrapper = shallow(<TodoList {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expects activityIndicatorView to be rendered', () => {
    expect(wrapper.find('.activityIndicatorView').exists()).toBeTruthy();
  });

  it('expects todoFlatList to not be rendered', () => {
    expect(
      wrapper
        .find('.todoListView')
        .find('.todoFlatList')
        .exists()
    ).toBeFalsy();
  });
});
