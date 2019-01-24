import fetch from 'node-fetch';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

global.fetch = fetch;
chai.use(sinonChai);

describe('Album', () => {
  let fetchStub;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
    fetchStub = sinon.stub(global, 'fetch');
    fetchStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchStub.restore();
  });

  describe('Smoke tests', () => {
    it('Should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('Should have getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('Should have getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum Method', () => {
    // verifica se fetch ocorre
    // verifica se fetch ocorre com url desejada
    // verifica se dado é recebido pela promise
    it('Should call fetch from getAlbum', () => {
      spotify.album.getAlbum();
      expect(fetchStub).to.be.calledOnce;
    });

    it('Should call fetch from getAlbum with correct url', () => {
      spotify.album.getAlbum('0rA5rQVW5kPq0SmUGFtbO1');
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/0rA5rQVW5kPq0SmUGFtbO1');
    });

    it('Should return json from promise', () => {
      const album = spotify.album.getAlbum('0rA5rQVW5kPq0SmUGFtbO1');
      album.then((data) => {
        expect(data).to.be.deep.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums Method', () => {
    it('Should call fetch from getAlbums', () => {
      spotify.album.getAlbums();
      expect(fetchStub).to.be.calledOnce;
    });

    it('Should call fetch from getAlbums with correct url', () => {
      spotify.album.getAlbums(['0rA5rQVW5kPq0SmUGFtbO1', '337NFdsJYgx1HbW3Fs8zyz']);
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums?ids=0rA5rQVW5kPq0SmUGFtbO1,337NFdsJYgx1HbW3Fs8zyz');
    });

    it('Should return json from promise', () => {
      const album = spotify.album.getAlbums('0rA5rQVW5kPq0SmUGFtbO1');
      album.then((data) => {
        expect(data).to.be.deep.eql({ album: 'name' });
      });
    });

    it('Should return error from promise when wrog url', () => {
      fetchStub.rejects(new Error('foo'));
      const album = spotify.album.getAlbums();

      album.catch((data) => {
        expect(data.message).to.be.eql('foo');
      });
    });
  });

  describe('getAlbumTracks Method', () => {
    it('Should call fetch from getAlbumTracks', () => {
      spotify.album.getTracks();
      expect(fetchStub).to.be.calledOnce;
    });

    it('Should call fetch from getAlbumTrack with correct url', () => {
      spotify.album.getTracks('337NFdsJYgx1HbW3Fs8zyz');
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/337NFdsJYgx1HbW3Fs8zyz/tracks');
    });

    it('Should return json from promise', () => {
      const album = spotify.album.getTracks('337NFdsJYgx1HbW3Fs8zyz');
      album.then((data) => {
        expect(data).to.be.deep.eql({ album: 'name' });
      });
    });
  });
});
