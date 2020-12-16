//all route handlers
const fs = require("fs");
const path = require("path");
const Blogs = require("../models/blog.js");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

const fileName = path.join(__dirname, "..", "data", "data.json");
const blog = JSON.parse(fs.readFileSync(fileName, "utf-8"));
