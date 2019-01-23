"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.ACCESS_TOKEN = exports.API_URL = void 0;
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var ACCESS_TOKEN = 'BQASU3sloEq-VywNVjx1fBjTBYywMMYYdbWcpbF6SozE7gQQQMbnz-ajmwna360xndUmoXBBWZhsrYF-lYa6UuK1AC4H8QYAkteCz0JG1gPxwdrG-zQqkf4kNU6rUQNmbAvREjHpHDgNE8zQCV8';
exports.ACCESS_TOKEN = ACCESS_TOKEN;
var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(ACCESS_TOKEN)
  }
};
exports.HEADERS = HEADERS;