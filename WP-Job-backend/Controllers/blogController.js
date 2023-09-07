
const log = require("../Models/blogModel")


exports.createBlog = async (req, res) => {
        try {
            const blog = await log.create(req.body)
            res.status(200).json({
                status: "success",
                data: blog
            })
        } catch (error) {
            res.status(400).json({
                // status: "failed",
                message: error.message
            })
        }
    }

exports.getAll = async (req, res) => {
    try {
        const getAll= await log.find({}).populate("user")
        res.status(200).json({message: getAll})
    }
    catch(error){
        res.status(400).json(error.message)
    }
    }

// Compare this snippet from WP-Job-backend\Controllers\commentController.js:
// const commentModel = require("../Models/commentModel");
//
// exports.createComment = async (req, res) => {
//  try {

