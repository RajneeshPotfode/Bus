import React, { useEffect, useState } from 'react'
import './Try.css'
import { Busb } from './Busb';
import { Busbutton } from './Busbutton';
export const Buses = () => {

  const[cli,setcli]=useState(false)
  const[bd,setbd]=useState([])
 
  let arr=[
    {
      "_id": {
        "$oid": "65c8aed4340fe35660d9dd24"
      },
      "Rno": 1,
      "Bno": "MP09FA1647",
      "DRIVER'S NAME": "Mr. SUMIT",
      "DRIVER'S PHONE NO": "9111629590",
      "BUS_ROUTE": [
        "PALIYA",
        "HATOD",
        "GANDHI NAGAR",
        "AERODRUM THANA (City Bus Stop) ",
        "VIDHYA DHAM TEMPLE (Main Road)",
        "KALANI NAGAR (Main Road) ",
        "SHIKSHAK NAGAR",
        "BHATIYA HOSPITAL",
        "RAMCHANDRA NAGAR (PETROL PUMP) ",
        " CDGI"
      ],
      "SHIFT_I": [
        "06:25:00 AM",
        "06:32:00 AM",
        "06:45:00 AM",
        "06:50:00 AM",
        "06:51:00 AM",
        "06:52:00 AM",
        "06:54:00 AM",
        "06:56:00 AM",
        "06:58:00 AM",
        "07:45:00 AM"
      ],
      "SHIFT_II": [
        "NA",
        "NA",
        "08:45:00 AM",
        "08:50:00 AM",
        "08:51:00 AM",
        "08:52:00 AM",
        "08:56:00 AM",
        "08:58:00 AM",
        "09:00:00 AM",
        "09:45:00 AM"
      ]
    },
    
  ]

  const [data,setdata]=useState(arr)
// const ferchdata= async ()=>{

// try{

//   const res= await fetch("http://localhost:8000/getdata")

//   const result=await res.json();


//   console.log(result.result)
  

//    setdata(result.result)


// }
// catch{
//   console.log("error at fetching data in db")
//   setdata([])
// }

// }

// useEffect(
//  ()=>{ferchdata()},
//   []
// )

if(cli){
   return <Busb data={bd}></Busb>
 
  

}

  return (
    <div className='conten'>

     {
          data.map((data)=>{
            return <Busbutton key={data.Rno} setbd={setbd} setcli={setcli} data={data}></Busbutton>
          })
        } 
        </div>
  )
}
