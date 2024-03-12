import { useState } from 'react'

import './App.css'
import { Nav } from './assets/com/Nav'
import { Route,Routes } from 'react-router-dom'
import { Buses } from './assets/com/Buses'
import { Compalain } from './assets/com/Compalain'
import { Login } from './assets/com/Login'
import { Notification } from './assets/com/Notification'
import { Signup } from './assets/com/Signup'
import { Home } from './assets/com/Home'

function App() {

  const [login,setlogin]= useState(false);
  

  return (
    <div id='Ap' className=' bg-white h-2000px w-screen  '>

<>


{ login &&
  <Nav setlogin={setlogin} login={login}></Nav>

}

     

  

     <Routes>
       
        <Route  path='/home' element={<Home/>} ></Route>
        <Route path="/Buses" element={<Buses></Buses>} ></Route>
        <Route path="/notification" element={<Notification></Notification>} ></Route>
        <Route path="/complain" element={<Compalain></Compalain>} ></Route>
        <Route path="/*" element={<Login setlogin={setlogin} login={login}></Login>} ></Route>
        <Route path="/Singup" element={<Signup setlogin={setlogin} login={login} ></Signup>}></Route>
  
      </Routes>
    </>


    </div>
    
  )
}

export default App
