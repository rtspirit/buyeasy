"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _items = _interopRequireDefault(require("./items"));

var _users = _interopRequireDefault(require("./users"));

var _default = function _default(app) {
  app.use("/items", _items["default"]);
  app.use("/users", _users["default"]);
};

exports["default"] = _default;