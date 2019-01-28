import chai, { expect } from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
  it('Should exist ConvertToHumanTime funciton', () => {
    expect(convertToHumanTime).to.exist;
  });

  it('Should recieve 0ms and convert to 0:00', () => {
    const convertedTime = convertToHumanTime(0);
    expect(convertedTime).to.be.eql('0:00');
  });

  it('Should recieve 1000ms and convert to 0:01', () => {
    const convertedTime = convertToHumanTime(1000);
    expect(convertedTime).to.be.eql('0:01');
  });

  it('Should recieve 342573ms and convert to 5:42', () => {
    const convertedTime = convertToHumanTime(342573);
    expect(convertedTime).to.be.eql('5:42');
  });
});
