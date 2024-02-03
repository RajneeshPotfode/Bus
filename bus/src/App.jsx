import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './assets/com/Nav'
import { Route,Routes } from 'react-router-dom'
import { Buses } from './assets/com/Buses'
import { Compalain } from './assets/com/Compalain'
import { Login } from './assets/com/Login'
import { Notification } from './assets/com/Notification'

function App() {
  

  return (
    <>
     <Nav></Nav>

  

     <Routes>
       
        <Route path='/home' element={<h1>home</h1>} ></Route>
        <Route path="/Buses" element={<Buses></Buses>} ></Route>
        <Route path="/notification" element={<Notification></Notification>} ></Route>
        <Route path="/complain" element={<Compalain></Compalain>} ></Route>
        <Route path="/logout" element={<Login></Login>} ></Route>
        <Route path="*" element={<h1>wrong address</h1>}></Route>
  
      </Routes>
    </>
  )
}

export default App
