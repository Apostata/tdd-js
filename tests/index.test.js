import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'; // integração do sinon com o chai
import fetch from 'node-fetch';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = fetch;

describe('Spotify Wrapper lib', () => {
  it('Should create a instance of spotify wrapper', () => {
    const spotify = new SpotifyWrapper();
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('Should recieve apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'blablabla',
    });
    expect(spotify.apiURL).to.be.equal('blablabla');
  });

  it('Should use default apiURL if not provided ', () => {
    const spotify = new SpotifyWrapper();
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('Should recieve token as an option ', () => {
    const spotify = new SpotifyWrapper({
      token: 'blablabla',
    });
    expect(spotify.token).to.be.equal('blablabla');
  });

  describe('request method', () => {
    let fetchedStub;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.resolves({ json: () => ({ album: 'name' }) });
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('Should have request method ', () => {
      const spotify = new SpotifyWrapper();
      expect(spotify.request).to.exist;
    });

    it('Should call fetch when request', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      spotify.request('url');

      expect(fetchedStub).to.be.calledOnce;
    });

    it('Should call fetch with correct url', () => {
      const spotify = new SpotifyWrapper();

      spotify.request('url');

      expect(fetchedStub).to.be.calledWith('url');
    });

    it('Should call fetch with correct headers', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      const headers = {
        headers: { Authorization: 'Bearer foo' },
      };
      spotify.request('url');

      expect(fetchedStub).to.be.calledWith('url', headers);
    });
  });
});
