"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _album = _interopRequireDefault(require("./album"));

var _search = _interopRequireDefault(require("./search"));

var _config = require("./config");

var _utils = _interopRequireDefault(require("./utils"));

// export {
//   search,
//   searchAlbums,
//   searchArtist,
//   searchPlayLists,
// } from './search';
var SpotifyWrapper =
/*#__PURE__*/
function () {
  function SpotifyWrapper(props) {
    (0, _classCallCheck2.default)(this, SpotifyWrapper);
    this.apiURL = props.apiURL || _config.API_URL;
    this.token = props.token;
    this.album = _album.default.call(this);
    this.search = _search.default.call(this);
  }

  (0, _createClass2.default)(SpotifyWrapper, [{
    key: "request",
    value: function request(url) {
      var headers = {
        headers: {
          Authorization: "Bearer ".concat(this.token)
        }
      };
      return fetch(url, headers).then(_utils.default);
    }
  }]);
  return SpotifyWrapper;
}();

exports.default = SpotifyWrapper;