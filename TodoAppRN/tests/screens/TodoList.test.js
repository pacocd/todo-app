import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TodoList } from '../../src/screens/TodoList';

configure({ adapter: new Adapter() });

describe('when TodoList is fully rendered', () => {
  const props = {
    navigation: {},
    getTodoList: jest
      .fn()
      .mockReturnValue(
        new Promise(resolve => resolve({ data: { status: 200 } }))
      ),
    hasError: jest.fn().mockReturnValue(false),
    setTodoListData: jest.fn()
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
      data: {
        status: 200
      }
    });
  });

  it('expects setTodoListData to have been called with data from getTodoList', () => {
    expect(wrapper.instance().props.setTodoListData).toHaveBeenCalledWith({
      status: 200
    });
  });
});
