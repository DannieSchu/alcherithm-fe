import React from 'react';
import { shallow } from 'enzyme';
import YourSolution from './YourSolution.jsx';

describe('the YourSolution Component', () => {
  it('renders YourSolution', () => {
    const wrapper = shallow(<YourSolution userSolution="user solution here"/>);
    expect(wrapper).toMatchSnapshot();
  });
});

