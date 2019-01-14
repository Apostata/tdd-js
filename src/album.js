import { API_URL, ACCESS_TOKEN } from './config';

const fetchOpts = {
  headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
};
export const getAlbum = id => fetch(`${API_URL}/albums/${id}`, fetchOpts)
  .then(data => data);

export const getAlbums = ids => fetch(`${API_URL}/albums?ids=${ids}`, fetchOpts)
  .then(data => data);

export const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/tracks`, fetchOpts)
  .then(data => data);
