import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoListItem from '../../src/components/TodoListItem';

configure({ adapter: new Adapter() });

describe('when TodoListItem is fully renderd', () => {
  const props = {
    todo: { id: 1, user_id: 1, title: 'test', completed: false }
  };
  const wrapper = shallow(<TodoListItem {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
