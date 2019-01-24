module.exports = require('./index').default;
/* exporta de forma correta para uso de classe no browser pela chamada
* const spotify = new SpotifyWrapper()
* ao invés de
* const spotify = new SpotifyWrapper.default();
*/
