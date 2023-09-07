const express = require ("express");
const router = express.Router();
const blogController = require("../Controllers/blogController")
const upload = require("../upload/Multer")
router.post("/create",upload.single("image"), blogController.createBlog);
router.route("/").get(blogController.getAll)
router
    .route("/:id")
    .delete(blogController.deleteBlog)
    .put(upload.single("image"),blogController.updateBlog)

module.exports= router;