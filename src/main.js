import SpotifyWrapper from 'spotify-wrapper';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const spotify = new SpotifyWrapper({
  token: 'BQDeS3b6_GvEMOO2GPpkJZr2jxV7mJHCKPSNi0r_qcCzhIPVyxYCC9KY-kiMBQhya_PDVOy7-o8mkWEXeqhVFsuTHhbPeid_DPJkopbHfau2X63OehaTTn6uOrAAHVAPtLVO0x1MiGfDah7idXQ',
});

const albumListElement = document.getElementById('albumList');
const albumInfoElement = document.getElementById('albumInfo');
const albumTracksElement = document.getElementById('album-tracks');

const albums = spotify.search.albums('wardruna');
const album = spotify.album.getAlbum('0rA5rQVW5kPq0SmUGFtbO1');
const tracks = spotify.album.getTracks('0rA5rQVW5kPq0SmUGFtbO1');
albums
  .then((data) => {
    renderAlbums(data.albums.items, albumListElement);
  });

album.then((data) => {
  renderAlbumInfo(data, albumInfoElement);
});

tracks.then((data) => {
  renderAlbumTracks(data.items, albumTracksElement);
});
