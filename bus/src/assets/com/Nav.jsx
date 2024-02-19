import React from 'react'
import { NavLink,Link, useNavigate } from 'react-router-dom' 
export const Nav = (props) => {

 
let login = props.login;
let setlogin = props.setlogin;
let use = useNavigate()



  
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>

      


       { login &&

         <NavLink to="/logout" className=" text-white text-[1.2rem] py-[8px] px-[12px] rounded-[8px] shadow-2xl  ">
         Home
       </NavLink>

       }
       
        

      {  login &&
      
      <NavLink to="/Buses" className=" text-white text-[1.2rem] py-[8px] px-[12px] rounded-[8px] shadow-2xl ">
      Buses
    </NavLink>}
       

        {
          login &&
        
          <NavLink to="/notification" className=" text-white text-[1.2rem] py-[8px] px-[12px] rounded-[8px] ">
      Notification
    </NavLink>}
       
       { login &&
        <NavLink to="/complain" className=" text-white text-[1.2rem] py-[8px] px-[12px] rounded-[8px]  ">
      Complain
    </NavLink>}
        
        {login &&
          <NavLink to="/*" className=" text-white text-[1.2rem] py-[8px] px-[12px] rounded-[8px]  ">
          
            <button onClick={(event)=>{
                       event.preventDefault();
                       setlogin(!login);
                       use("/login");

            }}>
             Logout
            </button>
            
            
            
     
    </NavLink>}

   



        

    </div>
   
   
    
   
    
  )
}
