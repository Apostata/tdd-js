import SpotifyWrapper from 'spotify-wrapper';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const spotify = new SpotifyWrapper({
  token: 'BQDESmOvkpDPiKKA5R5AubokelcOJVORF-XbGPZxnMNxXYQYOORMALIZVe7h49jgpUoSCQe79Cq04_dv2Pi4Kf2DvMsRUkA56qsXuoF2lrtR5dehb29_ge6gBv983IHSDvCYPuLuTHHoL-ZydC8',
});

const albumListElement = document.getElementById('albumList');
const albumInfoElement = document.getElementById('albumInfo');
const albumTracksElement = document.getElementById('album-tracks');

const albums = spotify.search.albums('wardruna');
const album = spotify.album.getAlbum('0rA5rQVW5kPq0SmUGFtbO1');

albums
  .then((data) => {
    renderAlbums(data.albums.items, albumListElement);
  });

album
  .then(data => /* retrurn renderAlbumInfo */ renderAlbumInfo(data, albumInfoElement))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracksElement));
