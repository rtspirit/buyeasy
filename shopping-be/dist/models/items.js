"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var itemsSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  pricing: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
    required: true,
    "default": []
  },
  description: {
    type: String,
    required: true
  },
  reviews: {
    overallRating: {
      type: Number,
      required: true
    },
    numberOfReviews: {
      type: Number,
      required: true
    }
  },
  dealOfTheDay: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false
});
itemsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
itemsSchema.set("toJSON", {
  virtuals: true
});

var ItemsModel = _mongoose["default"].model("listings", itemsSchema);

var _default = ItemsModel;
exports["default"] = _default;