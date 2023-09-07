import React from 'react'
import { Link } from 'react-router-dom'
import wp from "../assets/Logo.png"
const JobCard = ({post}) => {
  return (
    <div className='flex ml-[20rem]'>
      <Link to={`/single/${post._id}`}> 
     
      {/* <div className='  bg-gray-300 flex flex-col-reverse'>
        <div className=' w-12'> 
          <img className='w-12 rounded-full mt-4' src={`http://localhost:8080/${post.user.image}`} alt="logo" />
          <p>{post.name}</p>
          <h2 className='text-xl font-bold '>{post.jobTitle}</h2>
          <p>{post.jobDesc.substring(0,80)}</p> </div>

          <div className=' w-12'> 
          <img className='w-12 rounded-full mt-4' src={wp} alt="logo" />
          <p>dk;anfpkdn</p>
          <h2 className='text-xl font-bold '>dakjbfkjdab</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, maiores inventore debitis dolore qui, optio est adipisci beatae libero sint rerum tempora reiciendis mollitia sit consectetur. Autem tempore incidunt aliquid?</p> </div>
    
      </div> */}

<div className="w-[800px] bg-gray-100 shadow-lg mb-5 px-4 py-2 rounded-md">
   <div className="">
    <div className="flex gap-6 items-center mb-2">
     <div className="rounded-full">
      <img src={`http://localhost:8080/${post.user.image}`} alt="logo" srcset="" className="w-12 rounded-full" />
     </div>
     <div>
      <p className=" font-bold text-xl my-3" >{post.jobTitle}</p>
      <h1 className=" font-light">{post.jobDesc.substring(0,100) }....</h1>
     </div>
    </div>
    </div>
    </div>
     

</Link>
    </div>
    
  )
}

export default JobCard
