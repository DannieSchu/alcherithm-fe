import React from 'react';
import { shallow } from 'enzyme';
import PopUp from './PopUp';

describe('PopUp component', () => {
  it('renders PopUp', () => {  
    const selectedSolutions = [`
    const removeOne = (num, arr) => {
    if(num % 3 === 2) {
        arr.pop();  
    }
    };
    
    const removeElements = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        const arrayItem = arr[i];
        callback(arrayItem, arr);
    }
    return arr;
    };
    `, `
    const removeOne = (num, arr) => {
    if(num % 3 === 2) {
        arr.pop();  
    }
    };
    
    const removeElements = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        const arrayItem = arr[i];
        callback(arrayItem, arr);
    }
    return arr;
    };
    `];

    const wrapper = shallow(<PopUp solutions={selectedSolutions} toggle={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
