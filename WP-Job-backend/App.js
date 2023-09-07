const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./Routes/userRoute");
const postRoute = require("./Routes/postRoute");
const blogRoute = require("./Routes/blogRoute")
const cors =require("cors")
dotenv.config({ path: "./.env" });

require("./Models/postModel")
require("./Models/userModel")
require("./Models/blogModel")
require("./Models/commentModel")
require("./Connection");

app.use(cors());
app.use(express.json());
app.use(express.static("images"))
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/blog", blogRoute)

app.listen(8080, () => {
 console.log("connected server port of 8000");
});
