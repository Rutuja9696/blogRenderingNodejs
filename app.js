const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const blogRouter = require("./routes/blogRoutes");
const { config } = require("process");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/blogs", blogRouter);
//listning port
app.listen(
  process.env.PORT,
  console.log(`app started on port ${process.env.PORT}`)
);
