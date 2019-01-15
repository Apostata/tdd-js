
import { API_URL, ACCESS_TOKEN } from './config';
import toJSON from './utils';

const fetchOpts = {
  headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
};
export const search = (query, type) => fetch(`${API_URL}/search?query=${query}&type=${type}`, fetchOpts)
  .then(toJSON)
  .catch(error => error);

export const searchArtist = query => search(query, 'artist');

export const searchAlbums = query => search(query, 'album');

export const searchTracks = query => search(query, 'track');

export const searchPlayLists = query => search(query, 'playlist');
