"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("./../services/user.service"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var sgMail = require("@sendgrid/mail");

var API_KEY = "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";

var save = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var newUser, user, token, msg;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newUser = _objectSpread({}, req.body);
            _context.prev = 1;
            _context.next = 4;
            return _user["default"].save(newUser);

          case 4:
            user = _context.sent;
            _context.next = 7;
            return user.generateAuthToken();

          case 7:
            token = _context.sent;
            res.send({
              user: user,
              token: token
            });
            sgMail.setApiKey(API_KEY);
            msg = {
              to: newUser.email,
              from: "assignment@yopmail.com",
              // Use the email address or domain you verified above
              subject: "Thanks for Signing up from BuyEasy",
              text: "Thank you for choosing BuyEasy",
              html: "<strong>This is a test email for the website BuyEasy.</strong>"
            }; //ES6

            sgMail.send(msg).then(function () {}, function (error) {
              console.error(error);

              if (error.response) {
                console.error(error.response.body);
              }
            });
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](1);
            res.status(400).send(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 14]]);
  }));

  return function save(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].login(req.body.email, req.body.password);

          case 3:
            user = _context2.sent;
            _context2.next = 6;
            return user.generateAuthToken();

          case 6:
            token = _context2.sent;
            res.send({
              user: user,
              token: token
            });
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            res.status(400).send(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var logout = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            req.user.tokens = req.user.tokens.filter(function (token) {
              return token.token !== req.token;
            });
            _context3.next = 4;
            return req.user.save();

          case 4:
            res.send();
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(500).send();

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function logout(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  save: save,
  login: login,
  logout: logout
};
exports["default"] = _default;