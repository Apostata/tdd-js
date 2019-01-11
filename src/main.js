export default class SpotifyWrapper {
  static search(query, type) {
    const url = `https://api.spotify.com/v1/search?query=${query}&type=${type}`;
    fetch(url).then(data => data.json);
  }
}
