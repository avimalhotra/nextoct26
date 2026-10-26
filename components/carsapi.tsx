"use client";

import { useState, useEffect } from "react";

export default function CarsAPI(){

     const [data,setData]=useState([]);
     

     useEffect(()=>{

          async function getCars(){
               const x=await fetch("/api/cars");
               const y=await x.json();
               setData(y);
 
          }

          getCars();

     },[]);

     // useEffect(()=>{
     //      async function postData(){
     //            const a=await fetch("/api/signup",{method:"POST",body:JSON.stringify({name:"aa",pass:1234})});
     //           const b=await a.json();
     //           console.log(b);
     //      }    

     //      postData()

     // },[]);

     return (
          <>
               <table className="border w-full border-collapse rounded">
                    <thead>
                         <tr>
                              <th className="border p-2">S No</th>
                              <th className="border p-2">Name</th>
                              <th className="border p-2">Type</th>
                              <th className="border p-2">Price</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map((elem,ind)=>(
                                   <tr key={ind}>
                                        <td className="border p-2">{++ind}</td>
                                        <td className="border p-2">{elem.name}</td>
                                        <td className="border p-2">{elem.type}</td>
                                        <td className="border p-2">{elem.price}</td>
                                   </tr>
                              ))
                         }
                    </tbody>
               </table>
          </>
     )
}