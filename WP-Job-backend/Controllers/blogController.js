
const log = require("../Models/blogModel")


exports.createBlog = async (req, res) => {
    try {
    //   req.body.image = req.file.filename;
      console.log(req.body);
      const blog = await log.create(req.body);
      res.status(200).json({ message: "Blog successfully added." , data: blog });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
   
    // exports.createBlog = async (req, res) => {
    //     try {
    //         const blog = await blogPost.create(req.body)
    //         res.status(200).json({
    //             status: "success",
    //             data: blog
    //         })
    //     } catch (error) {
    //         res.status(400).json({
    //             status: "failed",
    //             message: error
    //         })
    //     }
    // }


// Compare this snippet from WP-Job-backend\Controllers\commentController.js:
// const commentModel = require("../Models/commentModel");
//
// exports.createComment = async (req, res) => {
//  try {

