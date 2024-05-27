import React from 'react'
import { FaRegEdit } from "react-icons/fa";
const EditFinish = () => {
  return (
    // Main Div
    <div className='p-10 flex gap-10 w-full'>
      {/* Left Div */}
      <div className='w-8/12 shadow-lg flex min-h-[50rem] p-10 bg-white '>
       <div className='w-1/12  max-h-full bg-blue-500'></div>
       <div className='w-4/5 h-full'>
        <h1 className='text-theme-red text-center text-3xl'>Hello World</h1>
        <p className='text-center'>hello world</p>
        <hr className='my-10' />
        <div className='px-10'>
        <p>Sksadjf j</p>
        <p>Sksadjf j</p>
        <p>Sksadjf j</p>
        <p>Sksadjf j</p>
        </div>
       </div>

      </div>
      {/* Right Div */}
      <div className='w-4/12 border border-red-500'>
        <button className='flex px-5 py-2 gap-1 items-center text-lg bg-theme-red rounded-md text-white'>
          <FaRegEdit className=''/> Edit This Resume

        </button>

        <div className='bg-red-100 h-full w-full mt-4 p-10'>
        <div>
          <span
            className={`text-2xl p-4 cursor-pointer rounded-full`}
            onClick={() => handleClick("coverLetter")}
            style={{
              backgroundColor:
                activeButton === "coverLetter" ? "#ec4843" : "transparent",
              color: activeButton === "coverLetter" ? "white" : "black",
            }}
          >
            Cover Letter
          </span>
          <span
            className={`text-2xl p-4 cursor-pointer rounded-full`}
            onClick={() => handleClick("photoLinks")}
            style={{
              backgroundColor:
                activeButton === "photoLinks" ? "#ec4843" : "transparent",
              color: activeButton === "photoLinks" ? "white" : "black",
            }}
          >
            Photo and Social Links
          </span>
        </div>

        </div>

      </div>
      
    </div>
  )
}

export default EditFinish