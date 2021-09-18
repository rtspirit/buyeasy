"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = require("lodash");

var _items = _interopRequireDefault(require("../models/items"));

var saveItemtoDB = function saveItemtoDB(newItemData) {
  var newItem = new _items["default"](newItemData);
  var promise = newItem.save();
  return promise;
};

var getItemsfromDB = function getItemsfromDB() {
  var promise = _items["default"].find();

  return promise;
};

var getFewItemsFromDB = function getFewItemsFromDB(numberOfItems) {
  var promise = _items["default"].find().limit((0, _lodash.toNumber)(numberOfItems));

  return promise;
};

var getItemDescFromDB = function getItemDescFromDB(id) {
  var promise = _items["default"].find({
    _id: id
  });

  return promise;
};

var _default = {
  saveItemtoDB: saveItemtoDB,
  getItemsfromDB: getItemsfromDB,
  getFewItemsFromDB: getFewItemsFromDB,
  getItemDescFromDB: getItemDescFromDB
};
exports["default"] = _default;