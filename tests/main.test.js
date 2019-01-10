
import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  context('Smoke tests', () => {
    it('Should FizzBuzz exist', () => {
      expect(FizzBuzz).to.exist;
    });

    it('Should fizzBuzz to be instance of FizzBuzz', () => {
      const fizzBuzz = new FizzBuzz(3);
      expect(fizzBuzz).to.be.instanceOf(FizzBuzz);
    });

    it('Should FizzBuzz(3) to be equal "Fizz"', () => {
      const fizzBuzz = new FizzBuzz(3);
      expect(fizzBuzz.isFizzBuzz).to.be.equal('Fizz');
    });

    it('Should FizzBuzz(6) to be equal "Fizz"', () => {
      const fizzBuzz = new FizzBuzz(6);
      expect(fizzBuzz.isFizzBuzz).to.be.equal('Fizz');
    });

    it('Should FizzBuzz(5) to be equal "Buzz"', () => {
      const fizzBuzz = new FizzBuzz(5);
      expect(fizzBuzz.isFizzBuzz).to.be.equal('Buzz');
    });


    it('Should FizzBuzz(10) to be equal "Buzz"', () => {
      const fizzBuzz = new FizzBuzz(10);
      expect(fizzBuzz.isFizzBuzz).to.be.equal('Buzz');
    });

    it('Should FizzBuzz(15) to be equal "FizzBuzz"', () => {
      const fizzBuzz = new FizzBuzz(15);
      expect(fizzBuzz.isFizzBuzz).to.be.equal('FizzBuzz');
    });

    it('Should FizzBuzz(4) to be equal 4', () => {
      const fizzBuzz = new FizzBuzz(4);
      expect(fizzBuzz.isFizzBuzz).to.be.equal(4);
    });

    // it('Should FizzBuzz(0) to be equal 0', () => {
    //   const fizzBuzz = new FizzBuzz(0);
    //   expect(fizzBuzz.isFizzBuzz).to.be.equal(0);
    // });
  });
});
