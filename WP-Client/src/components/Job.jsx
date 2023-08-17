import React from "react";
import JobCard from "./JobCard";
import Filter from "./Filter";
import { useState,useEffect} from "react";
import axios from "axios";
// import { log } from "console";

function Job() {
    const [post, setPosts] = useState([])
    // console.log(post)
    useEffect(()=>{
        axios.get("http://localhost:8080/post/") 
        .then((res)=> { 
            setPosts(res.data.message)
            console.log(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[])
 return (
  <div>
   <div className="flex mt-32 justify-between mx-60 items-start">
    <div>
     <h1 className="mb-5 text-center font-bold text-xl">
      Job Opportunities <span className="font-light text-gray-400">{post.length}</span>
     </h1>
        {post.map((post)=>(
                <JobCard job={post}/>
            ))
        }
    </div>
    <div className="">
     <Filter />
    </div>
   </div>
  </div>
 );
}

export default Job;
