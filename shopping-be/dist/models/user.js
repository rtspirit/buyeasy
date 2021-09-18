"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var validator = require("validator");

var bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken"); // User schema


var userSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate: function validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate: function validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    }
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});
userSchema.pre("save", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(next) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = this;

            if (!user.isModified("password")) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return bcrypt.hash(user.password, 8);

          case 4:
            user.password = _context.sent;

          case 5:
            next();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
userSchema.methods.generateAuthToken = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var user, token;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          user = this;
          token = jwt.sign({
            _id: user._id.toString()
          }, "thisisajinkya");
          user.tokens = user.tokens.concat({
            token: token
          });
          _context2.next = 5;
          return user.save();

        case 5:
          return _context2.abrupt("return", token);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));
userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.set("toJSON", {
  virtuals: true
});

var User = _mongoose["default"].model("User", userSchema);

var _default = User;
exports["default"] = _default;