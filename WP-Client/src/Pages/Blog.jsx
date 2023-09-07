import React from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <div className=''>
        <Link to="/"> back </Link>
        blog
      <div className=' w-[700px]  items-start bg-gray-100 p-12'>
        <h1 className=' text-2xl font-bold text-center p-2 '>Add a Blog</h1>
       <div className=' flex flex-col gap-4 pt-12'>
        <div>
            <h3 className='text-xl font-bold'>Blog Form</h3>
            <span className='text-[#7A7B7C]'>The following is required and will only be shared with Opeepl</span>
        </div>
        <div>
            <p>Blog title</p>
            <input type="text" name="" placeholder='Enter the blog title' id="" />
        </div>
        <div>
            <p>Blog body</p>
            <input type="text" name="" placeholder='Enter the blog description' id="" />
        </div>
        <div>
        <p className="font-light text-xs text-gray-400 mb-3">Job Location</p>
            <select type="password" className="w-full p-1.5 rounded-md bg-[#f6f6f6]">
                <option value="" disabled selected>
                    Select your option
                </option>
                <option >Business</option>
                <option >Technology</option>
                <option >Health</option>
                <option >Politics</option>
            </select>
        </div>
       
          <div class="flex items-center justify-center w-[30rem]">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                // class="hidden"
                name="image"
                type="file"
                // onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
          <div className="flex justify-center">
          <button
            className="px-10 py-3 mt-10  bg-black text-white rounded-md"
            // onClick={handleOnSubmit}
            // disabled={signingUp}
          >
           Publish {/* {signingUp ? "Signing up" : "Sign up"} */}
          </button>
        </div>
        </div>
    
      </div>
    </div>
  )
}

export default Blog
