import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
function Job() {
  
  const [post, setPost] = useState({});
  const handleOnPost = (e) => {
      e.preventDefault()
        // console.log(post)
  //  console.log(post)

        const token = localStorage.getItem("token")
        const decode = jwtDecode(token)
        const user = decode.id
        const updateUser = {
          ...post,
          user: user
        }
        axios.post("http://localhost:8080/post", updateUser)
        .then(res => {toast.success(res.data.message);})
        .catch((e) => { toast.error(e.response.data.message)})
        // console.log(updateUser);
  }

 return (
  <div>
   <div className="bg-primary p-5">
    <Link to="/" className="font-bold  mb-20 mx-60">
     ← Back
    </Link>
    <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10">
     <h1 className="font-bold text-2xl mb-2">Post New Job</h1>
     <p className="font-light text-xs">
      The following is required and will be shared with opeepi
     </p>

     {/* Name */}
     <div className="mt-5 mb-3">
      <p className="font-light mb-2 text-xs text-gray-400">Job Title</p>
      <input
      onChange={(e)=> setPost({...post,jobTitle: e.target.value})}
       type="text"
       className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
       name=""
       id=""
       placeholder="Enter your job title"
      />
     </div>

     {/* Email */}
     <div>
      <p className="font-light text-xs text-gray-400 mb-3">Job Description</p>
      <textarea
      onChange={(e)=> setPost({...post,jobDesc: e.target.value})}
       type="text"
       name=""
       id=""
       placeholder="Enter job description"
       className="w-full p-1.5 rounded-md bg-[#f6f6f6] h-64"></textarea>
     </div>

     {/* Job Type */}
     <div className="flex justify-between mt-5 mb-3">
      <div>
       <p className="font-light text-xs text-gray-400 mb-3">Job Type</p>
       <select
        className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
        placeholder="Enter job type"
        onChange={(e)=> setPost({...post,jobType: e.target.value})}
        >

        <option value="" disabled selected>
         Select your option
        </option>
        <option value={"Full-Time"}>Full-Time</option>
        <option value={"Part-Time"}>Part-Time</option>
        <option value={"Internship"}>Internship</option>
       </select>

       {/* Experience */}
      </div>
      <div>
       <p className="font-light text-xs text-gray-400 mb-3">Experience</p>
       <select
        className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
        placeholder="Enter job experience"
       onChange={(e)=> setPost({...post, experience: e.target.value})}
       >

        <option value="" disabled selected>
         Select your option
        </option>
        <option value={"senior"}>senior</option>
        <option value={"junior"}>junior</option>
        <option value={"Expert"}>Expert</option>
       </select>
      </div>
     </div>

     <div>
      <p className="font-light text-xs text-gray-400 mb-3">Job Location</p>
      <select type="password" className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
       onChange={(e)=> setPost({...post,Location: e.target.value})}
       >

       <option value="" disabled selected>
        Select your option
       </option>
       <option value={"Onsite"}>Onsite</option>
       <option value={"Remote"}>Remote</option>
      </select>
     </div>

     <div className="flex justify-center">
      <button className="px-10 py-3 mt-10  bg-black text-white rounded-md" onClick={handleOnPost}>
       Post Job
      </button>
     </div>
    </form>
   </div>
  </div>
 );
}

export default Job;