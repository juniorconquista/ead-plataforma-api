require("babel-core/register");
const express = require("express");
const bodyParser = require("body-parser");
const consign = require("consign");
const expressValidator = require("express-validator");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(fileUpload());

consign({ cwd: "app" })
  .include("routes")
  .then("config/dbConnection.js")
  .into(app);

module.exports = app;
