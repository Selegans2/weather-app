"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputstyleModule = _interopRequireDefault(require("./Inputstyle.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputLogin = function InputLogin(props) {
  return _react.default.createElement("div", {
    className: "my-auto",
    style: {
      /*background:"blue",*/
    }
  }, _react.default.createElement("div", {
    className: "content text-center"
  }, _react.default.createElement("form", null, _react.default.createElement("input", {
    type: "text",
    required: true
  }), _react.default.createElement("label", {
    alt: "C\xD3DIGO ESTUDIANTIL",
    placeholder: "C\xD3DIGO ESTUDIANTIL"
  }))));
};

InputLogin.propTypes = {};
var _default = InputLogin;
exports.default = _default;

//# sourceMappingURL=InputLogin.js.map