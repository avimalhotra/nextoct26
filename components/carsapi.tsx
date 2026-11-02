"use client";

import { useState, useEffect } from "react";

export default function CarsAPI(){

     const [data,setData]=useState([]);
     
     useEffect(()=>{

          async function getCars(){
               const x=await fetch("/api/cars",{cache:"default"});
               // const x=await fetch("/api/cars",{cache:"force-cache"});
               // const x=await fetch("/api/cars",{cache:"no-cache"});
               // const x=await fetch("/api/cars",{next:{revalidate:60}});              // 1 min
               const y=await x.json();
               setData(y);
          }
          getCars();
          
     },[]);


     return (
          <>
               <table className="border w-full border-collapse rounded">
                    <thead>
                         <tr>
                              <th className="border p-2 w-1/4">S Number</th>
                              <th className="border p-2 w-1/4">Name</th>
                              <th className="border p-2 w-1/4">Type</th>
                              <th className="border p-2 w-1/4">Price</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map((elem,ind)=>(
                                   <tr key={ind}>
                                        <td className="border p-2 w-1/4">{++ind}</td>
                                        <td className="border p-2 w-1/4">{elem.name}</td>
                                        <td className="border p-2 w-1/4">{elem.type}</td>
                                        <td className="border p-2 w-1/4">{elem.price}</td>
                                   </tr>
                              ))
                         }
                    </tbody>
               </table>
          </>
     )
}

// export const dynamic = "force-dynamic";
// export const revalidate=60;