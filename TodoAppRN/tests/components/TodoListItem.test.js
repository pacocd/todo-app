import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoListItem from '../../src/components/TodoListItem';

configure({ adapter: new Adapter() });

describe('when TodoListItem is fully renderd', () => {
  const props = {
    todo: { id: 1, user_id: 1, title: 'test', completed: false },
    onPress: jest.fn(),
    onValueChange: jest.fn()
  };
  const wrapper = shallow(<TodoListItem {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expects todoContainerView to be rendered', () => {
    expect(wrapper.find('.todoContainerView').exists()).toBeTruthy();
  });

  it('expects todoTitleText to be rendered', () => {
    expect(
      wrapper
        .find('.todoContainerView')
        .find('.todoTitleText')
        .exists()
    ).toBeTruthy();
  });

  it('expects todoCompletedSwitch to be rendered', () => {
    expect(
      wrapper
        .find('.todoContainerView')
        .find('.todoCompletedSwitch')
        .exists()
    ).toBeTruthy();
  });

  it('taps on todoCompletedSwitch and completed state should change to true', () => {
    wrapper
      .find('.todoContainerView')
      .find('.todoCompletedSwitch')
      .simulate('valueChange', true);

    expect(wrapper.state().completed).toBeTruthy();
  });

  it('taps on TodoListItem to call onPress function', () => {
    wrapper.simulate('press');
    expect(wrapper.instance().props.onPress).toHaveBeenCalled();
  });
});
