//all route handlers
const fs = require("fs");
const path = require("path");
const Blogs = require("../models/blog.js");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

const fileName = path.join(__dirname, "..", "data", "data.json");
const blogs = JSON.parse(fs.readFileSync(fileName, "utf-8"));
//get all blogs
const getAllBlogs = (req, res, next) => {
  sendResponse(200, "Successful", blogs, req, res);
};
//get by id
const getById = (req, res) => {
  const blogDisplay = blogs.find((blog) => {
    return blog.blogId == req.params.blogId;
  });
  if (blogDisplay) {
    sendResponse(200, "Successful", [blogDisplay], req, res);
  } else {
    sendError(new AppError(404, "Not Found", "task not available"), req, res);
  }
};
module.exports = { getAllBlogs, getById };
