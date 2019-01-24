// export {
//   search,
//   searchAlbums,
//   searchArtist,
//   searchPlayLists,
// } from './search';

import album from './album';
import search from './search';
import { API_URL } from './config';
import toJSON from './utils';

export default class SpotifyWrapper {
  constructor(props) {
    this.apiURL = props.apiURL || API_URL;
    this.token = props.token;
    this.album = album.call(this);
    this.search = search.call(this);
  }

  request(url) {
    const headers = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
    return fetch(url, headers).then(toJSON);
  }
}
