import React from "react";
import PostDesc from "./PostDesc";
import PostProfileCard from "./PostProfileCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Post() {
    const {id} = useParams()
    const [singleJob , setSingleJob]= useState({})
    // console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8080/post/${id}`)
        .then((res)=>{ setSingleJob(res.data.message);})
        .catch((e) => {console.log(e);})
    },[])
 return (
  <div>
   <Link to="/" className="font-bold my-8 mx-80">← Back</Link>
   <div className="flex items-start justify-around mx-48 mt-24">
    <PostDesc singleJob={singleJob}/>
   { singleJob.user ? < PostProfileCard singleJob={singleJob.user} />: "loading...."}
   </div>
  </div>
 );
}

export default Post;
