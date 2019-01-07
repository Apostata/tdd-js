
import { should, expect, assert } from 'chai';

describe('Class Main', () => {
  let arr;

  before(() => {
    // exemplo: inicia conexão banco.
  });

  after(() => {
    // exemplo: fecha conexão banco.
  });

  beforeEach(() => { // antes de cada it()
    arr = [1, 2, 3];
  });

  afterEach(() => { // depois de cada it()
  });


  it('Should be an array ', () => { // smoke test -> se existe ou de um tipo
    expect(arr).to.be.a('array');
  });

  it('Should have size of 4 when push another value to the array ', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('Should remove 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('Should have size of 2 when pop another value to the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('Should return true when pop 3 from de array', () => {
    expect(arr.pop() === 3).to.be.true;
  });
});
