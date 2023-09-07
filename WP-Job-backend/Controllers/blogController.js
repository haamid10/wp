
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

// delete blog

exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBlog = await log.findByIdAndDelete({ _id: id })
        res.status(200).json({ message: deleteBlog  ,data:"deleted"})
    }
    catch (error) {
        res.status(400).json(error.message)
    }
}

// update blog
// exports.updateBlog =async (req,res)=>{
//     try{
//         // console.log('hello')
//         const {id}= req.params;
//         // console.log(id);
//         // console.log(req.body,"this is body");
//         // console.log(typeof(req.body))
//         // console.log((Object.keys(req.body)))
//         const updateblog=await log.findOneAndUpdate({_id :id})
//         // console.log(updatedblog)
//         res.status(200).json({message:updated, data: updateblog})
//     }
//     catch(error){
//         res.status(400).json(error)
//     }
// }
    







