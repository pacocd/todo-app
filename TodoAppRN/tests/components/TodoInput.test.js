import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TodoInput } from '../../src/components/TodoInput';
configure({ adapter: new Adapter() });

describe('when TodoInput is fully rendered using Switch mode', () => {
  const props = {
    fieldName: 'completed',
    title: 'Completed',
    value: false,
    type: 'switch',
    setEditingFieldsData: jest.fn()
  };

  const wrapper = shallow(<TodoInput {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('when TodoInput is fully rendered using Numeric mode', () => {
  const props = {
    fieldName: 'user_id',
    title: 'User',
    value: 1,
    type: 'numeric',
    setEditingFieldsData: jest.fn()
  };

  const wrapper = shallow(<TodoInput {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('when TodoInput is fully rendered using default mode', () => {
  const props = {
    fieldName: 'title',
    title: 'Title',
    value: 'test',
    type: 'default',
    setEditingFieldsData: jest.fn()
  };

  const wrapper = shallow(<TodoInput {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
