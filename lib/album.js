"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = require("./config");

var fetchOpts = {
  headers: {
    Authorization: "Bearer ".concat(_config.ACCESS_TOKEN)
  }
};

var getAlbum = function getAlbum(id) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(id), fetchOpts).then(function (data) {
    return data;
  });
};

exports.getAlbum = getAlbum;

var getAlbums = function getAlbums(ids) {
  return fetch("".concat(_config.API_URL, "/albums?ids=").concat(ids), fetchOpts).then(function (data) {
    return data;
  });
};

exports.getAlbums = getAlbums;

var getAlbumTracks = function getAlbumTracks(id) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(id, "/tracks"), fetchOpts).then(function (data) {
    return data;
  });
};

exports.getAlbumTracks = getAlbumTracks;