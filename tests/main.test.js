
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
  beforeEach(() => {

  });


  context('Smoke tests', () => {
    it('Should Spotify wrapper exist', () => {
      expect(Spotify).to.exist;
    });

  //   it('Should exist the search method', () => {
  //     expect(Spotify.search).to.exist;
  //   });

  //   it('Should exist the searchAlbuns method', () => {
  //     expect(Spotify.searchAlbuns).to.exist;
  //   });

  //   it('Should exist the searchArtists method', () => {
  //     expect(Spotify.searchArtists).to.exist;
  //   });

  //   it('Should exist the searchTracks method', () => {
  //     expect(Spotify.searchTracks).to.exist;
  //   });

  //   it('Should exist the searchPlaylists method', () => {
  //     expect(Spotify.searchPlaylists).to.exist;
  //   });
  });

  context('Generic Search', () => {
    it('Should call fetch function', () => {
      // testa uma chamada no fetch dentro do metodo estático search da class spotify
      /* é preciso definir
        "env": { //para o eslint reconhecer o mocha e os métodos de window (como no browser)
          "mocha": true,
          "browser": true
        },
      */
      const fetchedStub = sinon.stub(global, 'fetch');

      Spotify.search();
      expect(fetchedStub).to.have.been.calledOnce;
    });
  });
});
