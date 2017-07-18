var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

/*
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../src/containers/app/App';
import Foo from './Foo';

describe('<MyComponent />', () => {
  it('Renders APp - Home', () => {
    const wrapper = shallow(<App />);
    // expect(wrapper.find(Foo)).to.have.length(3);
    expect(2).to.equal(2);
  });
});
*/
