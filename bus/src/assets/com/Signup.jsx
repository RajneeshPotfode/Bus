import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Signup = ({setlogin,login}) => {
        let navigtee = useNavigate()

        function signuphandler(evt)
        {
                evt.preventDefault();
                setlogin(!login);
                navigtee("/login")
                
        }
  return (

    <form  className='flex flex-col justify-center items-center gap-y-4 mt-52' onSubmit={signuphandler}>

<div className='  flex justify-center items-center  -ml-56 mb-32  absolute '>
  <div id='box' className=' bg-red-600 h-28 w-28 rounded-full'>

  </div>
</div>

<div className='  flex justify-center items-center  -mr-56 -mb-80  absolute '>
  <div id='box2' className=' bg-green-600 h-28 w-28 rounded-full'>

  </div>
</div>


        <div  className=' bg-[white]/60  flex flex-col justify-center items-center gap-y-4 mt-28 p-5 w-72 rounded-3xl shadow-2xl absolute'>


          <label className='w-300px'>
          <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Email Addresse
          <sup className='text-pink-200'>*</sup></p>


          <input
          
          required
          type = "email"
          
         
         
          
          placeholder='Enter Email'
          name='email'
          className=' bg-white rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-[1px] border-gray-500'
          />
         
  </label>

  <label className='w-300px'>
          <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>


          <input
          required
          
          
          type = "text"   /* {showpass?"text":"password"} */
          
          
          placeholder='Enter Password'
          name='password'
          className='bg-white rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-[1px] border-gray-500'
          />
         
  </label>

  <label className='w-300px'>
          <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Conform Password<sup className='text-pink-200'>*</sup></p>


          <input
          required
          
          
          type = "text"   /* {showpass?"text":"password"} */
          
          
          placeholder='Enter Conform Password'
          name='password'
          className='bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
          />
         
  </label>

  <NavLink path="/#">
  <p className='text-xs -mt-3 text-blue-100 max-w-max ml-auto '>
      Forgot Password
     </p>
  </NavLink>

  <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3'>
       Signup
  </button>      


        </div>
    

  
  </form>
)
}
   
