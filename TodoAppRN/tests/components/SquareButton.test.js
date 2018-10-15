import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SquareButton from '../../src/components/SquareButton';

configure({ adapter: new Adapter() });

describe('when SquareButton is fully rendered', () => {
  const props = {
    text: 'Test',
    color: 'red',
    textColor: 'white',
    onPress: jest.fn()
  };
  const wrapper = shallow(<SquareButton {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('taps on button to call onPress', () => {
    wrapper.simulate('press');
    expect(wrapper.props().onPress).toHaveBeenCalled();
  });
});
