import React from 'react'



export const Compalain = () => {

  function reporthandler(){
    
  }
  return (
    <div className='flex   justify-center items-center mt-24 '>
      {/* <h2
      className='text-[1.5rem] text-richblack-5 mb-1 leading-[1.375rem]'>
        Report Sectionogout
      </h2> */}
      <img id='man1' src='man.png'/>
      


      <div id='box3' className=' h-96 w-96  bg-[white]/30 flex flex-col gap-6  items-center mt-8 pt-4 pb-4 pl-2 pr-2 rounded-3xl relative '>
      <img id='report' src='report.png' className=' mt-28 '/>

      <div className=' flex justify-center items-center flex-col h-full w-full  -mt-6 gap-3 pr-1 pl-1 absolute'>

        
      <textarea
      className=' bg-[white]/50 mt-10 rounded-[0.5rem] text-black w-full h-52 p-[12px] border-[1px] border-gray-500 '

placeholder='Write Report Here'
/>

<button
className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3 '
onClick={reporthandler}

> Report

</button>

      </div>
      
      



      </div>
      <img id='man2' src='man.png'/>
     


      
    </div>
  )
}
