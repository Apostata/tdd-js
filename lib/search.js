"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlayLists = exports.searchTracks = exports.searchAlbums = exports.searchArtist = exports.search = void 0;

var _config = require("./config");

var _utils = _interopRequireDefault(require("./utils"));

var search = function search(query, type) {
  return fetch("".concat(_config.API_URL, "/search?query=").concat(query, "&type=").concat(type), _config.HEADERS).then(_utils.default).catch(function (error) {
    return error;
  });
};

exports.search = search;

var searchArtist = function searchArtist(query) {
  return search(query, 'artist');
};

exports.searchArtist = searchArtist;

var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

exports.searchAlbums = searchAlbums;

var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

exports.searchTracks = searchTracks;

var searchPlayLists = function searchPlayLists(query) {
  return search(query, 'playlist');
};

exports.searchPlayLists = searchPlayLists;