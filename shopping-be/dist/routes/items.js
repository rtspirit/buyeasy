"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _items = _interopRequireDefault(require("./../controllers/items.controller"));

var router = _express["default"].Router();
/* get all the items for sale */


router.route("/save").post(_items["default"].saveNewItem);
router.route("/all").get(_items["default"].getItems);
router.route("/all/:numberOfItems").get(_items["default"].getFewItems);
router.route("/description/:productID").get(_items["default"].getItemDescription);
var _default = router;
exports["default"] = _default;