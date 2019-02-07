import renderAlbums from './AlbumList';
import spotify from './Spotify';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const albumListElement = document.getElementById('albumList');

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    spotify.search.albums(searchInput.value).then((data) => {
      renderAlbums(data.albums.items, albumListElement);
    });
  });
}
