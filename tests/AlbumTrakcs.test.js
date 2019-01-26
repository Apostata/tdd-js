import 'jsdom-global/register';
import chai, { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';

describe('AlbumTracks', () => {

  const data = [
    {
      preview_url: 'https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Around The World',
      duration_ms: 238733,
    },
  ];

  const data2 = [
    {
      preview_url: 'https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Around The World',
      duration_ms: 238733,
    },
    {
      preview_url: 'https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Around The World',
      duration_ms: 238733,
    },
  ];

  const markup = `
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
    <p class="music-number">1</p>
    <p class="music-title">Around The World</p>
    <p class="music-duration">238733</p>
  </div>`;

  const markup2 = `
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
    <p class="music-number">1</p>
    <p class="music-title">Around The World</p>
    <p class="music-duration">238733</p>
  </div>
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
    <p class="music-number">1</p>
    <p class="music-title">Around The World</p>
    <p class="music-duration">238733</p>
  </div>`;

  it('Should exist AlbumTracks', () => {
    expect(renderAlbumTracks).to.exist;
  });

  it('Should render music given correct data', () => {
    const elememt = document.createElement('div');
    renderAlbumTracks(data, elememt);
    expect(elememt.innerHTML).to.be.eql(markup);
  });

  it('Should render music given correct data multiple', () => {
    const elememt2 = document.createElement('div');
    renderAlbumTracks(data2, elememt2);
    expect(elememt2.innerHTML).to.be.eql(markup2);
  });
});