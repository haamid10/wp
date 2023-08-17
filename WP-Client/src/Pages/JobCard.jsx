import React from 'react'
import { Link } from 'react-router-dom'
import wp from "../assets/Logo.png"
const JobCard = ({post}) => {
  return (
    <div>
      <Link to={`/single/${post._id}`}> 
    <div>
    <div className='  w-[500px] bg-white shadow-md mb-5 px-4 py-2 rounded-md   '>   
    <div className='flex flex-row gap-32  items-center justify-between'>

    <div className='flex flex-col border-slate-900'>
    <div className=' flex gap-5 items-center mb-2'>
      <img className='w-16 mt-4' src={wp} alt="logo" />
      <p>mailchamp</p>
    </div>
    <div className='ml-20 -mt-4'>
      <h2 className='text-xl font-bold '>{post.jobTitle}</h2>
      <p>{post.jobDesc.substring(0,80)}</p> </div>
    </div>
    

    </div> 
    </div>
      </div>
   
  
    </Link>
    </div>
  )
}

export default JobCard
