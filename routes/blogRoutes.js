const express = require("express");
const { getAllBlogs, getById } = require("../controller/actions.js");
const router = express.Router();
router.route("/blogs").get(getAllBlogs, getById);
module.exports = router;
