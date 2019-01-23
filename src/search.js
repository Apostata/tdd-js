
import { API_URL, HEADERS } from './config';
import toJSON from './utils';

export const search = (query, type) => fetch(`${API_URL}/search?query=${query}&type=${type}`, HEADERS)
  .then(toJSON)
  .catch(error => error);

export const searchArtist = query => search(query, 'artist');

export const searchAlbums = query => search(query, 'album');

export const searchTracks = query => search(query, 'track');

export const searchPlayLists = query => search(query, 'playlist');
