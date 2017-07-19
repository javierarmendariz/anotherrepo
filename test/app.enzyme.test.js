import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from '../src/containers/app/App'
import Home from '../src/containers/home/Home';

const wrapper = shallow(<App />);

// console.log('wrapper:', wrapper);

describe('(Component) App', () => {
  it('renders...', () => {
    // expect(wrapper).to.have.length(1);
    expect(wrapper.find(Home));
  });
});
