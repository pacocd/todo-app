import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../src/screens/TodoList';

configure({ adapter: new Adapter() });

describe('when TodoList is full rendered', () => {
  const props = { navigation: {} };
  const wrapper = shallow(<TodoList {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
