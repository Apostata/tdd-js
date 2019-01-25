import SpotifyWrapper from 'spotify-wrapper';
import renderAlbums from './AlbumList';

const spotify = new SpotifyWrapper({
  token: 'BQDOTWB5ovaw4mIbwRxJqqtRRPbII3JZaEWD8WNr8Coxl4NAomUVwv_9Y3ca_FBlKOCEptOarAa4lkyn-E4_fKw40pqq3d2xoaIqNjb2WUJ-W4FOBfGV013Gv7LMsRQ_f18bjspvPJMy3fcrpSA',
});

const albumListElement = document.getElementById('albumList');

const albums = spotify.search.albums('wardruna');
albums.then((data) => {
  renderAlbums(data.albums.items, albumListElement);
});
