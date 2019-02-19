import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import nock from 'nock';
// padarao btc-converter -C USD -A 1
import convertBTC from '../src/ConvertBTC';

chai.use(sinonChai);

describe('ConvertBTC', () => {
  // it('Should return USD as currency and 1 as amount default', () => {
  //   expect(convertBTC('BRL', 2)).to.be.equal('2 BTC to BRL = 3000');
  // });

  const responseMock = {
    success: true,
    price: 3580.79,
    time: '2019-02-14 19:12:49',
  };

  let consoleStub;

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'info');
  });

  afterEach(() => {
    consoleStub.restore();
  });

  it('Should use currency USD and 1 as amount default', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 1 })
      .reply(200, responseMock);

    await convertBTC();

    expect(consoleStub).to.have.been.calledWith('1 BTC to USD = 3580.79');
  });

  it('Should use currency USD and 10 as amount default', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 10 })
      .reply(200, responseMock);

    await convertBTC('USD', 10);

    expect(consoleStub).to.have.been.calledWith('10 BTC to USD = 3580.79');
  });

  it('Should use currency BRL and 1 as amount default', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 1 })
      .reply(200, responseMock);

    await convertBTC('BRL');

    expect(consoleStub).to.have.been.calledWith('1 BTC to BRL = 3580.79');
  });

  it('Should show message when api return with error', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 2 })
      .replyWithError('Error');

    await convertBTC('BRL');

    expect(consoleStub).to.have.been.calledWith('Deu ruim! Tente novamente mais tarde.');
  });
});
