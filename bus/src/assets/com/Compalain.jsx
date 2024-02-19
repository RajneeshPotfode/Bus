import React from 'react'


export const Compalain = () => {

  function reporthandler(){
    
  }
  return (
    <div className='flex  justify-center items-center flex-col mt-32 '>
      <h2
      className='text-[1.5rem] text-richblack-5 mb-1 leading-[1.375rem]'>
        Report Section
      </h2>


      <div className=' h-96 w-96  bg-richblack-800 flex flex-col gap-6  items-center mt-8'>

      <textarea
      className=' bg-richblack-800 mt-10 rounded-[0.5rem] text-richblack-5 w-full h-52 p-[12px] border-[1px] border-gray-500'

placeholder='Write Report Here'
/>

<button
className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3'
onClick={reporthandler}

> Report

</button>


      </div>
     


      
    </div>
  )
}
