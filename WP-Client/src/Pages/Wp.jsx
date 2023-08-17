import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios'
import wp from "../assets/Logo.png"
import { FaCalendarWeek, FaSignal, FaComputerMouse } from "react-icons/fa6";
import JobCard from './JobCard'


const Wp = () => {
    const [posts, setPosts] = useState([])
    // console.log(post)
    useEffect(()=>{
        axios.get("http://localhost:8080/post/") 
        .then((res)=> { 
            setPosts(res.data.message)
            console.log(res.data.message)
        })
        .catch((err)=>{console.log(err)})
    },[])
  return (
    <div>
      <div className=' bg-[#222325]  p-6'>
        <h2 className=' text-center font-bold text-white p-4 text-4xl'>Find Jobs</h2>
        <p className=' text-center light text-white text-sm '><Link to="/">Home</Link>/Job</p>
      </div>
      <div>
        <select className='m-4 bg-[#222325] text-white p-2 rounded-md' placeholder='jobType' name="jobType" id="">
        <option value="" disabled  selected>jobType</option>

            <option value="">Onsite</option>
            <option value="">Remote</option>
        </select>

        <select className='m-4 bg-[#222325] text-white p-2 rounded-md' placeholder='jobType' name="jobType" id="">
            <option value="" disabled  selected>experience</option>
            <option value="">Senior</option>
            <option value="">junior</option>
            <option value="">Expert</option>
        </select>
      </div>

      <div>
      
{/* <JobCard/> */}
    {posts.map((post)=> {
        return(
            <>
            <JobCard post={post}/>

            </>
        )
    })}
   
  
    </div>
    </div>
  )
}

export default Wp
