
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'; // integração do sinon com o chai
// import sinonStubPromise from 'sinon-stub-promise';
import fetch from 'node-fetch';
import {
  search, searchAlbums, searchArtist, searchPlayLists, searchTracks,
} from '../src/search';
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

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });


  describe('Smoke tests', () => {
    it('Should shearch exist', () => {
      expect(search).to.exist;
    });

    it('Should searchAlbuns exist', () => {
      expect(searchAlbums).to.exist;
    });

    it('Should searchArtist exist', () => {
      expect(searchArtist).to.exist;
    });

    it('Should searchTracks exist', () => {
      expect(searchTracks).to.exist;
    });

    it('Should searchPlayLists exist', () => {
      expect(searchPlayLists).to.exist;
    });
  });

  describe('Generic Search', () => {
    context('Chamando metodo apenas com um tipo(type)', () => {
      it('Should call fetch function', () => {
        search();
        expect(fetchedStub).to.have.been.calledOnce;
      });

      it('Should call fetch function with args: "wardruna" e "artist"', () => {
        search('wardruna', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=wardruna&type=artist');
      });

      it('Should call fetch function with args: "wardruna" e "album"', () => {
        search('wardruna', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=wardruna&type=album');
      });
    });

    context('Chamando metodo apenas com mais de um tipo(type)', () => {
      it('Should call fetch function', () => {
        search();
        expect(fetchedStub).to.have.been.calledOnce;
      });

      it('Should call fetch function with args: "wardruna" e "[album, artist]"', () => {
        search('wardruna', ['album', 'artist']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=wardruna&type=album,artist');
      });
    });

    it('Should return json data from Promise', () => {
      const album = search('wardruna', 'album');
      album.then((data) => {
        expect(data).to.be.deep.eql({ album: 'name' });
      });
    });
  });

  describe('Search Artists', () => {
    it('Should call fetch function ', () => {
      searchArtist('wardruna');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with correct URL ', () => {
      searchArtist('wardruna');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=wardruna&type=artist');
    });
  });

  describe('Search Albuns', () => {
    it('Should call fetch function ', () => {
      searchAlbums('helvegen');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with correct URL ', () => {
      searchAlbums('helvegen');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=helvegen&type=album');
    });
  });

  describe('Search Tracks', () => {
    it('Should call fetch function ', () => {
      searchTracks('fehu');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with correct URL ', () => {
      searchTracks('fehu');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=fehu&type=track');
    });
  });

  describe('Search Playlists', () => {
    it('Should call fetch function ', () => {
      searchPlayLists('vikings');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with correct URL ', () => {
      searchPlayLists('vikings');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?query=vikings&type=playlist');
    });
  });
});
