"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("./../models/user"));

var bcrypt = require("bcryptjs");

var save = function save(newUser) {
  var user = new _user["default"](newUser);
  var promise = user.save();
  return promise;
};

var login = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, password) {
    var user, isMatch;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].findOne({
              email: email
            });

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 5;
              break;
            }

            throw new Error("Something went wrong!! unable to log you in now");

          case 5:
            _context.next = 7;
            return bcrypt.compare(password, user.password);

          case 7:
            isMatch = _context.sent;
            console.log("isMatch:" + isMatch);

            if (isMatch) {
              _context.next = 11;
              break;
            }

            throw new Error("Something went wrong!! unable to log you in now");

          case 11:
            return _context.abrupt("return", user);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  save: save,
  login: login
};
exports["default"] = _default;