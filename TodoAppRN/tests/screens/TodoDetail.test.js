import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoDetail from '../../src/screens/TodoDetail';

configure({ adapter: new Adapter() });

describe('when TodoDetail is fully rendered', () => {
  const props = {
    navigation: {
      state: {
        params: { todo: { id: 1, title: 'test', user_id: 1, completed: false } }
      }
    }
  };
  const wrapper = shallow(<TodoDetail {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
