import SpotifyWrapper from 'spotify-wrapper';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const spotify = new SpotifyWrapper({
  token: 'BQC7d-kwrAszlAF2VjXRsryrYas9tjfvXf77S3Stp8vQto3dKhE-Tri1RWTg1XSuyDpzr2-K65mJGVgXNe8gmXQhllWikI0slNN8ynsw0oGZjvAqPcQXIhqJUuMOipVqw2js6Z61jvVIn_DdrZw',
});

const albumListElement = document.getElementById('albumList');
const albumInfoElement = document.getElementById('albumInfo');

const albums = spotify.search.albums('wardruna');
const album = spotify.album.getAlbum('0rA5rQVW5kPq0SmUGFtbO1');
albums
  .then((data) => {
    renderAlbums(data.albums.items, albumListElement);
  });

album.then((data) => {
  renderAlbumInfo(data, albumInfoElement);
});
