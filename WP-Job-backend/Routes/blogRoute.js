const express = require ("express");
const router = express.Router();
const blogController = require("../Controllers/blogController")
const upload = require("../upload/Multer")
router.post("/create", blogController.createBlog)

module.exports= router;