
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'; // integração do sinon com o chai
import sinonStubPromise from 'sinon-stub-promise';
import fetch from 'node-fetch';
import Spotify from '../src/main';
/*
  Intregrando do sinon com o chai.
  Adiciona asserts ao chai para trabalhar com mock
*/
chai.use(sinonChai);

// "ensina" promises ao sinon
sinonStubPromise(sinon);

global.fetch = fetch;

describe('Spotify Wrapper', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    // fetchedStub.resolves({ json: () => ({ album: 'name' }) });
    fetchedStub.resolves({});
  });

  afterEach(() => {
    fetchedStub.restore();
  });


  describe('Smoke tests', () => {
    it('Should Spotify wrapper exist', () => {
      expect(Spotify).to.exist;
    });
  });

  describe('Generic Search', () => {
    context('Chamando metodo apenas com um tipo(type)', () => {
      it('Should call fetch function', () => {
        Spotify.search();
        expect(fetchedStub).to.have.been.calledOnce;
      });

      it('Should call fetch function with args: "wardruna" e "artist"', () => {
        Spotify.search('wardruna', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=wardruna&type=artist');
      });

      it('Should call fetch function with args: "wardruna" e "album"', () => {
        Spotify.search('wardruna', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=wardruna&type=album');
      });
    });

    context('Chamando metodo apenas com mais de um tipo(type)', () => {
      it('Should call fetch function', () => {
        Spotify.search();
        expect(fetchedStub).to.have.been.calledOnce;
      });

      it('Should call fetch function with args: "wardruna" e "[album, artist]"', () => {
        Spotify.search('wardruna', ['album', 'artist']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=wardruna&type=album,artist');
      });
    });

    it('Should return json data from Promise', () => {
      // promise.resolves({ body: 'json' });
      // Spotify.search('wardruna', ['album', 'artist']);
    });
  });
});
