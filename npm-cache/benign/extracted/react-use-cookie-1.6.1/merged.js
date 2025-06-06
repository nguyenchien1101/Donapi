"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.setCookie = exports.removeCookie = exports.getCookie = void 0;
exports.stringifyOptions = stringifyOptions;
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var isBrowser = typeof window !== 'undefined';
function stringifyOptions(options) {
  return Object.keys(options).reduce(function (acc, key) {
    if (key === 'days') {
      return acc;
    } else {
      if (options[key] === false) {
        return acc;
      } else if (options[key] === true) {
        return "".concat(acc, "; ").concat(key);
      } else {
        return "".concat(acc, "; ").concat(key, "=").concat(options[key]);
      }
    }
  }, '');
}
var setCookie = function setCookie(name, value, options) {
  if (!isBrowser) return;
  var optionsWithDefaults = _objectSpread({
    days: 7,
    path: '/'
  }, options);
  var expires = new Date(Date.now() + optionsWithDefaults.days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + stringifyOptions(optionsWithDefaults);
};
exports.setCookie = setCookie;
var getCookie = function getCookie(name) {
  var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return isBrowser && document.cookie.split('; ').reduce(function (r, v) {
    var parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '') || initialValue;
};
exports.getCookie = getCookie;
var removeCookie = function removeCookie(name) {
  document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
};
exports.removeCookie = removeCookie;
function _default(key, initialValue) {
  var _useState = (0, _react.useState)(function () {
      return getCookie(key, initialValue);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    item = _useState2[0],
    setItem = _useState2[1];
  var removeItem = (0, _react.useCallback)(function () {
    setItem(undefined);
    removeCookie(key);
  }, [key]);
  var updateItem = (0, _react.useCallback)(function (value, options) {
    setItem(value);
    setCookie(key, value, options);
  }, [key]);
  return [item, updateItem, removeItem];
}
