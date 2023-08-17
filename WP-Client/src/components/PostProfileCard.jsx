import React from "react";
import mailcamp from "../assets/mailchimp.jpeg";

function PostProfileCard({singleJob}) {
    console.log(`http:localhost:8080/${singleJob.image}`)
 return (
  <div className="flex flex-col items-center bg-white shadow-lg border-2 border-black px-3 py-2 rounded-lg">
   <img src={`http:localhost:8080/${singleJob.image}`} alt="" className="w-16 rounded-full" />
   <p className="text-gray-300 font-light">Job By</p>
   <h1 className="font-bold my-3">{singleJob.name} ↗</h1>
   <p className="text-8 font-light">
   {singleJob.bio} <br />
    {singleJob.company}
   </p>
  </div>
 );
}

export default PostProfileCard;
