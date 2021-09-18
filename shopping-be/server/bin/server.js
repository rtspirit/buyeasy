import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import routes from "../routes";
import cookieParser from "cookie-parser";

const app = express();
const cors = require("cors");

app.get("/test", (req, res) => {
  res.send("Hello from Buy Easy");
});

app.listen(3001, () => {
  console.log("Buy Easy back end runs here");
});

// mongoose connection
mongoose.connect(
  "mongodb+srv://test:" +
    process.env.DB_PASSWORD +
    "@cluster0.nxrzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

routes(app);

export default app;
