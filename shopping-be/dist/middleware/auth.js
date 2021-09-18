"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("./../models/user"));

var jwt = require("jsonwebtoken");

var auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decoded, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.header("Authorization").replace("Bearer ", "");
            decoded = jwt.verify(token, "shoppingapp");
            _context.next = 5;
            return _user["default"].findOne({
              _id: decoded._id,
              "tokens.token": token
            });

          case 5:
            user = _context.sent;

            if (user) {
              _context.next = 9;
              break;
            }

            console.log("not found");
            throw new Error();

          case 9:
            req.token = token;
            req.user = user;
            next();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            res.status(401).send({
              error: "Please authenticate."
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = auth;