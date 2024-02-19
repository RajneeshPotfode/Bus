import React from 'react'
import './Try.css'
export const Busb = ({data}) => {

 

  return (

    <>

    <div className='flex justify-center flex-col items-center bg-slate-100 w-[800px] mx-auto h-[400px] border-slate-500 rounded-2xl mt-14 '>

    <h1 className=' text-blue-100 text-2xl -mt-2'>{data.Rno}</h1>
    <h1 className='text-2xl text-blue-100 shadow-black'>{data.Bno}</h1>
    <h1>{data.DRIVER_NAME}</h1>
    
    <h1>{data.DRIVER_PHONE_NO}</h1>

    <div className='flex justify-center items-center mt-4 gap-2 bg-slate-200 w-[600px] h-[250px] rounded-2xl shadow-inner'>
     
    <div>
  {data.BUS_ROUTE.map((data)=>{
    return <li>{data}</li>
  })}
  </div>

  <div>
  {data.SHIFT_I.map((data)=>{
    return <li>{data}</li>
  })}
  </div>

  <div>
  {data.SHIFT_II.map((data)=>{
    return <li>{data}</li>
  })}
  </div>


    </div>

 


    </div>
    

    </>

       
  )
}
