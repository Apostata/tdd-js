import fetch from 'node-fetch';
import SpotifyWrapper from '../src/index';

global.fetch = fetch;
const spotify = new SpotifyWrapper({
  token: 'BQBSj_5Co5-TKyZY9Etp7dzawzEBHCDLffH5sYUWXWFEy2hbjSRnqtIKodeO9UkvqgIEKSRk16BXaS8_YTPSH3GPIZf1F3H8_3pcK_ww1notcx1KMHV5-kBqdjaGaJggIwGVbfmFwkvzls7dZ10',
});
const album = spotify.search.albums('Wardruna');


album
  .then(data => data.albums.items.map((item) => {
    console.log(item.name);// eslint-disable-line no-console
    return true;
  }))
  .catch(error => console.log(error));// eslint-disable-line no-console
