import fetch from 'node-fetch';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

global.fetch = fetch;
chai.use(sinonChai);

describe('Album', () => {
  let fetchStub;
  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
    fetchStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchStub.restore();
  });

  describe('Smoke tests', () => {
    it('Should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('Should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum Method', () => {
    // verifica se fetch ocorre
    // verifica se fetch ocorre com url desejada
    // verifica se dado é recebido pela promise
    it('Should call fetch from getAlbum', () => {
      getAlbum();
      expect(fetchStub).to.be.calledOnce;
    });

    it('Should call fetch from getAlbum with correct url', () => {
      getAlbum('0rA5rQVW5kPq0SmUGFtbO1');
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/0rA5rQVW5kPq0SmUGFtbO1');
    });

    it('Should return json from promise', () => {
      const album = getAlbum('0rA5rQVW5kPq0SmUGFtbO1');
      album.then((data) => {
        expect(data).to.be.deep.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums Method', () => {
    it('Should call fetch from getAlbums', () => {
      getAlbums();
      expect(fetchStub).to.be.calledOnce;
    });

    it('Should call fetch from getAlbums with correct url', () => {
      getAlbums(['0rA5rQVW5kPq0SmUGFtbO1', '337NFdsJYgx1HbW3Fs8zyz']);
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums?ids=0rA5rQVW5kPq0SmUGFtbO1,337NFdsJYgx1HbW3Fs8zyz');
    });

    it('Should return json from promise', () => {
      const album = getAlbums('0rA5rQVW5kPq0SmUGFtbO1');
      album.then((data) => {
        expect(data).to.be.deep.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbumTracks Method', () => {
    it('Should call fetch from getAlbumTracks', () => {
      getAlbumTracks();
      expect(fetchStub).to.be.calledOnce;
    });

    it('Should call fetch from getAlbumTrack with correct url', () => {
      getAlbumTracks('337NFdsJYgx1HbW3Fs8zyz');
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/337NFdsJYgx1HbW3Fs8zyz/tracks');
    });

    it('Should return json from promise', () => {
      const album = getAlbumTracks('337NFdsJYgx1HbW3Fs8zyz');
      album.then((data) => {
        expect(data).to.be.deep.eql({ album: 'name' });
      });
    });
  });
});
