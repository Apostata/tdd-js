import fetch from 'node-fetch';
import { searchAlbuns } from '../src/main';

global.fetch = fetch;

const album = searchAlbuns('Wardruna');

// eslint-disable-next-line no-console
album
  .then(data => data.albums.items.map(item => console.log(item.name)))
  .catch(error => console.log(error));
