import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import FullHeader from '../../src/FullHeader';

describe('FullHeader', () => {
  it('Should have header tag when mount', () => {
    const wrapper = shallow(<FullHeader />);
    expect(wrapper.find('header')).to.have.length(1);
  });

  context('title', () => {
    it('Should have h1 tag when mount', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper.find('h1')).to.have.length(1);
    });

    it('Should not render h1 tag when no title', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper.find('h1')).to.have.length(0);
    });

    // para testar o HTML renderizado apenas o render() é mais rápido
    it('Should render h1 with title passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper.find('h1').text()).to.be.eql('TDD');
    });
  });

  context('Subtitle', () => {
    it('Should render h2 tag when title passed', () => {
      const wrapper = shallow(<FullHeader subtitle="testes com js na prática!" />);
      expect(wrapper.find('h2')).to.have.length(1);
    });

    it('Should not render h2 tag when no title', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper.find('h2')).to.have.length(0);
    });

    it('Should render h2 with title passed', () => {
      const wrapper = shallow(<FullHeader subtitle="testes com js na prática!" />);
      expect(wrapper.find('h2').text()).to.be.eql('testes com js na prática!');
    });
  });

  context('bgColor', () => {
    it('Should have background-color #ccc when none is passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper).to.have.style('background-color').equal('#ccc');
    });

    it('Should have background-color #3299BB when passed', () => {
      const wrapper = shallow(<FullHeader bgColor="#3299BB" />);
      expect(wrapper).to.have.style('background-color').equal('#3299BB');
    });
  });

  context('textColor', () => {
    it('Should have text color #fff when none is passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper).to.have.style('color').equal('#fff');
    });

    it('Should have text color #3299BB when passed', () => {
      const wrapper = shallow(<FullHeader textColor="#3299BB" />);
      expect(wrapper).to.have.style('color').equal('#3299BB');
    });
  });

  context('font', () => {
    it('Should have text font-family sans-serif when none is passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper).to.have.style('font-family').equal('sans-serif');
    });

    it('Should have text font-family open-sans when passed', () => {
      const wrapper = shallow(<FullHeader font="open-sans" />);
      expect(wrapper).to.have.style('font-family').equal('open-sans');
    });
  });

  context('bgImg', () => {
    it('Should have background-image empty when none is passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper).to.have.style('background-image').equal('url()');
    });

    it('Should have background-image when passed', () => {
      const wrapper = shallow(<FullHeader bgImage="http://imagem.com.br/imagem/imagem.jpg" />);
      expect(wrapper).to.have.style('background-image').equal('url(http://imagem.com.br/imagem/imagem.jpg)');
    });
  });
});
