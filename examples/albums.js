import fetch from 'node-fetch';
import { searchAlbums } from '../src/search';

global.fetch = fetch;

const album = searchAlbums('Wardruna');

// eslint-disable-line no-console
album
  .then(data => data.albums.items.map((item) => {
    console.log(item.name);
    return true;
  }))
  .catch(error => console.log(error));// eslint-disable-line no-console
