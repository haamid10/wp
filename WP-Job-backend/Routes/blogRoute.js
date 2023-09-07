const express = require ("express");
const router = express.Router();
const blogController = require("../Controllers/blogController")
const upload = require("../upload/Multer")
router.post("/create",upload.single("image"), blogController.createBlog);
router.route("/").get(blogController.getAll)

module.exports= router;