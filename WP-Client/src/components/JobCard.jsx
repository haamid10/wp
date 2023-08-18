import React from "react";
import mailcamp from "../assets/mailchimp.jpeg";
import { Link } from "react-router-dom"
import { FaCalendarWeek, FaSignal, FaComputerMouse } from "react-icons/fa6";


function JobCard({job}) {
  // console.log(job._id);/
    // const img = `http:localhost:8000/${job.user.image}`
console.log(`http://localhost:8080/${job.user.image}`)
 return (
    <div>
    
    <Link to={`/single/${job._id}`}>
   
  <div className="w-[800px] bg-white shadow-md mb-5 px-4 py-2 rounded-md">
   <div className="flex items-center justify-between">
    <div className="flex gap-5 items-center mb-2">
     <div className="rounded-full">
      <img src={`http://localhost:8080/${job.user.image}`} alt="logo" srcset="" className="w-12 rounded-full" />
     </div>
     <div>
      <p className=" font-bold text-xl my-3" >{job.jobTitle}</p>
      <h1 className=" font-light">{job.jobDesc.substring(0,100) }....</h1>
     </div>
    </div>
    
   </div>
   <div className="flex gap-5 mx-2 mt-5">
    <div className="flex items-center gap-2">
     <FaCalendarWeek />
     <p>{job.jobType}</p>
    </div>
    <div className="flex items-center gap-2">
     <FaSignal />
     <p>{job.experience}</p>
    </div>
    <div className="flex items-center gap-2">
     <FaComputerMouse />
     <p>{job.Location}</p>
    </div>
   </div>   
   </div>
     </Link>

  </div>
 );
}

export default JobCard;
