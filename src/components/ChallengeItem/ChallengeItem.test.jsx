import React from 'react';
import { shallow } from 'enzyme';
import ChallengeItem from './ChallengeItem';

describe('ChallengeItem component', () => {
  it('renders ChallengeItem', () => {
    const wrapper = shallow(<ChallengeItem 
      category='forEach' 
      challengeNumber={1} 
      instructions='Write a function named greeting that takes in a string and returns the string in all uppercase letters. Then, write a function named speaker that takes in a string and a callback function. The speaker function should return the string in all uppercase letters only by invoking the callback.' 
      solutions={[{ passed: true, date: '03/02/20' }]}
      char={100}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
