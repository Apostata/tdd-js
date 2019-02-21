"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var FullHeader = function FullHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      bgColor = _ref.bgColor,
      textColor = _ref.textColor,
      font = _ref.font,
      bgImage = _ref.bgImage,
      video = _ref.video;
  var headerStylesCombined = (0, _objectSpread2.default)({}, _styles.headerStyle, {
    backgroundColor: bgColor,
    color: textColor,
    fontFamily: font,
    backgroundImage: "url(".concat(bgImage, ")")
  });
  return _react.default.createElement("header", {
    style: headerStylesCombined
  }, _react.default.createElement("div", {
    style: _styles.containerStyle
  }, title && _react.default.createElement("h1", {
    style: _styles.titleStyle
  }, title)
  /* se tem titulo mostra <h1/> */
  , subtitle && _react.default.createElement("h2", {
    style: _styles.subTitleStyle
  }, subtitle)), video && _react.default.createElement("video", {
    style: _styles.videoStyle,
    autoPlay: true,
    muted: true,
    loop: true,
    src: video
  }));
};

FullHeader.defaultProps = {
  title: null,
  subtitle: null,
  video: null,
  bgColor: '#ccc',
  textColor: '#fff',
  font: 'sans-serif',
  bgImage: ''
};
FullHeader.propTypes = {
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  video: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  textColor: _propTypes.default.string,
  font: _propTypes.default.string,
  bgImage: _propTypes.default.string
};
var _default = FullHeader;
exports.default = _default;