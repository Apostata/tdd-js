"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlayLists = exports.searchTracks = exports.searchAlbums = exports.searchArtist = exports.search = void 0;

var _config = require("./config");

var fetchOpts = {
  headers: {
    Authorization: "Bearer ".concat(_config.ACCESS_TOKEN)
  }
};

var search = function search(query, type) {
  return fetch("".concat(_config.API_URL, "/search?query=").concat(query, "&type=").concat(type), fetchOpts).then(function (data) {
    return data;
  }).catch(function (error) {
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