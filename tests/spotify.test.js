import chai, { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify wrapper', () => {
  it('Should be an object', () => {
    // const spotify = new SpotifyWrapper();
    expect(spotify).to.be.an('object');
  });

  it('Should have search methods', () => {
    // const spotify = new SpotifyWrapper();
    expect(spotify.search).to.exist;
  });

  it('Should have album methods', () => {
    // const spotify = new SpotifyWrapper();
    expect(spotify.album).to.exist;
  });
});
