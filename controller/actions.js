//all route handlers
const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "data", "data.json");
const blog = JSON.parse(fs.readFileSync(fileName, "utf-8"));
