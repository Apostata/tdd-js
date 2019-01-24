
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'; // integração do sinon com o chai
// import sinonStubPromise from 'sinon-stub-promise';
import fetch from 'node-fetch';
import SpotifyWrapper from '../src/index';
/*
  Intregrando do sinon com o chai.
  Adiciona asserts ao chai para trabalhar com mock
*/
chai.use(sinonChai);

// "ensina" promises ao sinon
// sinonStubPromise(sinon);

global.fetch = fetch;

describe('Search', () => {
  let fetchedStub;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });


  describe('Smoke tests', () => {
    it('Should spotify.search.albuns exist', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('Should spotify.search.artist exist', () => {
      expect(spotify.search.artist).to.exist;
    });

    it('Should spotify.search.tracks exist', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('Should spotify.search.playlists exist', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('Search Artists', () => {
    it('Should call fetch function ', () => {
      spotify.search.artist('wardruna');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with correct URL ', () => {
      spotify.search.artist('wardruna');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=wardruna&type=artist');
    });
  });

  describe('Search Albuns', () => {
    it('Should call fetch function ', () => {
      spotify.search.albums('helvegen');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with correct URL ', () => {
      spotify.search.albums('helvegen');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=helvegen&type=album');
    });
  });

  describe('Search Tracks', () => {
    it('Should call fetch function ', () => {
      spotify.search.tracks('fehu');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with correct URL ', () => {
      spotify.search.tracks('fehu');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=fehu&type=track');
    });
  });

  describe('Search Playlists', () => {
    it('Should call fetch function ', () => {
      spotify.search.playlists('vikings');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with correct URL ', () => {
      spotify.search.playlists('vikings');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=vikings&type=playlist');
    });
  });
});
