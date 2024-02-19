import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Login = ({setlogin,login}) => {

  let navigtee = useNavigate()

  function submithandler(evt)
  {
    evt.preventDefault();
    setlogin(!login);
    
    navigtee("/complain");
    
  }
  return (
    <form  className='flex flex-col justify-center items-center gap-y-4 mt-24' onSubmit={submithandler}>
      <label className='w-300px'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Addresse
            <sup className='text-pink-200'>*</sup></p>


            <input
            
            required
            type = "email"
            
           
           
            
            placeholder='Enter Email'
            name='email'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-[1px] border-gray-500'
            />
           
    </label>

    <label className='w-300px'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>


            <input
            required
            
            
            type = "text"   /* {showpass?"text":"password"} */
            
            
            placeholder='Enter Password'
            name='password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-[1px] border-gray-500'
            />
           
    </label>

    <NavLink path="/#">
    <p className='text-xs -mt-3 text-blue-100 max-w-max ml-auto '>
        Forgot Password
       </p>
    </NavLink>

    <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3'>
         Login
    </button>

    i have't account <span> <NavLink to="/Singup">
      Signup
      </NavLink></span>

    
    </form>
  )
}
