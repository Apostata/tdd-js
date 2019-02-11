import chai, { expect } from 'chai';
// padarao btc-converter -C USD -A 1
import convertBTC from '../src/ConvertBTC';

describe('ConvertBTC', () => {
  it('Should return USD as currency and 1 as amount default', () => {
    expect(convertBTC('BRL', 2)).to.be.equal('2 BTC to BRL = 3000');
  });
});
