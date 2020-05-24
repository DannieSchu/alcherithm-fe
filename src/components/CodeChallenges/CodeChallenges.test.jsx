import React from 'react';
import { shallow } from 'enzyme';
import CodeChallenges from './CodeChallenges';

describe('CodeChallenges component', () => {
  it('renders CodeChallenges', () => {
    const wrapper = shallow(<CodeChallenges />);
    expect(wrapper).toMatchSnapshot();
  });
});
