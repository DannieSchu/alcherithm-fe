import React from 'react';
import { shallow } from 'enzyme';
import Solutions from './Solutions.jsx';

describe('the Solutions Component', () => {
  it('renders Solutions', () => {
    const wrapper = shallow(<Solutions userSolution="user solution here"/>);
    expect(wrapper).toMatchSnapshot();
  });
});

