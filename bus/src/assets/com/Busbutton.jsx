import React, { useState } from 'react'
import { Busb } from './Busb'

export const Busbutton = ({data,setcli,setbd}) => {



 const clickhendler=()=>{
    setcli(true)
    setbd(data)
 }

// if(cli){
   
    
// }

  return (
<div onClick={clickhendler} id='hello' className='h-[100px] w-[100px] bg-pink-500 flex flex-col rounded-full justify-center items-center 
cursor-pointer text-white text-1xl'>
  <h1>{data.Rno}</h1>
  <h1 >{data.Bno}</h1>
</div>
  )
}
