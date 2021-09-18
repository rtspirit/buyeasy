"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = require("lodash");

var _items = _interopRequireDefault(require("./../services/items.service"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var saveNewItem = function saveNewItem(req, res) {
  var newItem = _objectSpread({}, req.body);

  console.log(newItem, "Trying to save the new item");

  var promise = _items["default"].saveItemtoDB(newItem);

  promise.then(function (item) {
    res.status(200).json(item);
  })["catch"](function (err) {
    console.log("Error" + err);
    res.status(400).json(err.errors);
  });
};

var getItems = function getItems(req, res) {
  var promise = _items["default"].getItemsfromDB();

  promise.then(function (item) {
    res.status(200).json(item);
  })["catch"](function (err) {
    console.log("Error" + err);
    res.status(400).json(err.errors);
  });
};

var getFewItems = function getFewItems(req, res) {
  var numberOfItems = (0, _lodash.get)(req, ["params", "numberOfItems"], 0);

  var promise = _items["default"].getFewItemsFromDB(numberOfItems);

  promise.then(function (item) {
    res.status(200).json(item);
  })["catch"](function (err) {
    console.log("Error" + err);
    res.status(400).json(err.errors);
  });
};

var getItemDescription = function getItemDescription(req, res) {
  var id = (0, _lodash.get)(req, ["params", "productID"], null);

  var promise = _items["default"].getItemDescFromDB(id);

  promise.then(function (item) {
    res.status(200).json(item);
  })["catch"](function (err) {
    console.log("Error" + err);
    res.status(400).json(err.errors);
  });
};

var _default = {
  saveNewItem: saveNewItem,
  getItems: getItems,
  getFewItems: getFewItems,
  getItemDescription: getItemDescription
};
exports["default"] = _default;