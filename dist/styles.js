"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoStyle = exports.containerStyle = exports.headerStyle = exports.subTitleStyle = exports.titleStyle = void 0;
var titleStyle = {
  fontSize: '5rem',
  lineHeight: '1.5'
};
exports.titleStyle = titleStyle;
var subTitleStyle = {
  fontSize: '2rem',
  lineHeight: '1.5'
};
exports.subTitleStyle = subTitleStyle;
var headerStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '110vh',
  backgroundSize: 'cover'
};
exports.headerStyle = headerStyle;
var containerStyle = {
  width: '100%',
  position: 'relative',
  zIndex: 2,
  textAlign: 'center'
};
exports.containerStyle = containerStyle;
var videoStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: 1,
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  transform: 'translate(-50%, -50%)'
};
exports.videoStyle = videoStyle;