import 'jsdom-global/register';
import chai, { expect } from 'chai';
import renderAlbumInfo from '../src/AlbumInfo';

describe('AlbumInfo', () => {
  const data = {
    album_type: 'album',
    artists: [{
      name: 'Incubus',
    }],
    id: '6peEdPVO73WtgGah5sEhX4',
    images: [{
      height: 640,
      url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
      width: 640,
    }],
    name: 'The Essential Incubus',
    type: 'album',
    total_tracks: 11,
  };

  const markup = `
  <div class="album-info">
    <img class="album-image" src="${data.images[0].url}" alt="${data.name}">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists[0].name}</p>
    <p class="album-counter">${data.total_tracks} Músicas</p>
  </div>
  `;

  it('Should exist AlbumInfo', () => {
    expect(renderAlbumInfo).to.exist;
  });

  it('Should create and append the markup given correct data', () => {
    const element = document.createElement('div');
    renderAlbumInfo(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it('Should return the data', () => {
    const element2 = document.createElement('div');
    const returnedData = renderAlbumInfo(data, element2);
    expect(returnedData).to.be.eql(data);
  });
});
