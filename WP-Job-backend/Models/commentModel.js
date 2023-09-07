const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
    // type: mongoose.Types.ObjectId,
    // ref: "BlogPost",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const commentModel = mongoose.model("Comment", commentSchema);
module.exports = commentModel;