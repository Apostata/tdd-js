import { API_URL, ACCESS_TOKEN } from './config';
import toJSON from './utils';

const fetchOpts = {
  headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
};
export const getAlbum = id => fetch(`${API_URL}/albums/${id}`, fetchOpts)
  .then(toJSON);

export const getAlbums = ids => fetch(`${API_URL}/albums?ids=${ids}`, fetchOpts)
  .then(toJSON);

export const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/tracks`, fetchOpts)
  .then(toJSON);
