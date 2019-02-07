import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';


const albumInfoElement = document.getElementById('albumInfo');
const albumTracksElement = document.getElementById('album-tracks');


function requestAlbum(id) {
  const album = spotify.album.getAlbum(id);
  album
    .then(data => /* retrurn renderAlbumInfo */ renderAlbumInfo(data, albumInfoElement))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracksElement));
}

export default function searchEnterTrigger() {
  document.addEventListener('click', (e) => {
    e.preventDefault();
    const result = e.path.filter(e => e.classList ? e.classList.contains('list-item') : false);
    if (result.length > 0) {
      const { id } = result[0];
      requestAlbum(id);
    }
  });
}
