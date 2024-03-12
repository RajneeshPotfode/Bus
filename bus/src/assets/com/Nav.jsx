import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaBus } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { NavLink,Link, useNavigate } from 'react-router-dom' 

export const Nav = (props) => {

 
let login = props.login;
let setlogin = props.setlogin;
let use = useNavigate()



  
  return (
    <div id='navv' className='flex justify-around h-16 items-center w-full max-w-full py-4 mx-auto bg-white rounded-full '>

      


       { login &&

         <NavLink to="/home" className=" text-black text-[1.1rem] py-[8px] px-[12px] rounded-[8px] hover:shadow-2xl flex justify-center items-center gap-1  ">
         Home
         <MdHome />
       </NavLink>

       }
       
        

      {  login &&
      
      <NavLink to="/Buses" className=" text-black text-[1.1rem] py-[8px] px-[12px] rounded-[8px] hover:shadow-2xl flex items-center gap-1 justify-center ">
      Buses
      <FaBus />

    </NavLink>}
       

        {
          login &&
        
          <NavLink to="/notification" className=" text-black text-[1.1rem] py-[8px] px-[12px] rounded-[8px] hover:shadow-2xl flex items-center gap-1 justify-center">
      Notification
      <MdOutlineNotificationsActive />
    </NavLink>}
       
       { login &&
        <NavLink to="/complain" className=" text-black text-[1.1rem] py-[8px] hover:shadow-2xl px-[12px] rounded-[8px] flex items-center gap-1 justify-center ">
      Complain
      <TbMessageReport />
    </NavLink>}
        
        {login &&
          <NavLink to="/*" className=" text-black text-[1.1rem] py-[8px] px-[12px] rounded-[8px]  ">
          
            <button onClick={(event)=>{
                       event.preventDefault();
                       setlogin(!login);
                       use("/login");

            }} className=' bg-violet-700 p-2 rounded-xl flex items-center gap-1 justify-center text-white hover:shadow-2xl'>
             Logout
             <RiLogoutCircleLine />
            </button>
            
            
            
     
    </NavLink>}

   



        

    </div>
   
   
    
   
    
  )
}
