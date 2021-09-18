"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routes = _interopRequireDefault(require("../routes"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var app = (0, _express["default"])();

var cors = require("cors");

app.get("/test", function (req, res) {
  res.send("Hello from Buy Easy");
});
app.listen(3001, function () {
  console.log("Buy Easy back end runs here");
}); // mongoose connection

_mongoose["default"].connect("mongodb+srv://test:" + process.env.DB_PASSWORD + "@cluster0.nxrzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
(0, _routes["default"])(app);
var _default = app;
exports["default"] = _default;