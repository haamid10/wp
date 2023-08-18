const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
 Titlbloge: {
  type: String,
  required: true,
 },
 blogDesc: {
  type: String,
  required: true,
 },
 blogType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Internship"],
 },
 user: {
  type: mongoose.Types.ObjectId,
  ref: "User",
 },
 
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
