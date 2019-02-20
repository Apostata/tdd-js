import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Component from '../../src/main';

describe('Component Hello', () => {
  it('should have h1 to display the Hello', () => {
    const wrapper = shallow(<Component name="Rene" />);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should have props for name', () => {
    const wrapper = mount(<Component name="Rene" />);
    expect(wrapper.props().name).to.exist;
  });

  it('should create a correct DOM structure', () => {
    const wrapper = shallow(<Component name="Rene" />);
    const componentMock = shallow(<h1>Hello Rene!</h1>);
    expect(wrapper.html()).to.be.equal(componentMock.html());
  });
});
