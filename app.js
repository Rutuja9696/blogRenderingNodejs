const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { config } = require("process");

const app = express();

app.listen(
  process.env.PORT,
  console.log(`app started on port ${process.env.PORT}`)
);
