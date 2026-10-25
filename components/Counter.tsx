"use client";
import { useState } from "react";

export default function Counter(){

     const [counter,setCounter]=useState(0);

     return (
          <>
               <h3 className="font-bold text-2xl mb-3">Client Component</h3>
               <button className="border px-4 py-2 me-3 rounded cursor-pointer hover:bg-indigo-900 hover:text-white" onClick={()=>setCounter(counter+1)}>Counter +</button>
               <button className="border px-4 py-2 me-3 rounded cursor-pointer hover:bg-indigo-900 hover:text-white" onClick={()=>setCounter(counter-1)}>Counter -</button>
               <button className="border px-4 py-2 me-3 rounded cursor-pointer hover:bg-indigo-900 hover:text-white" onClick={()=>setCounter(0)}>Counter -</button>

               <output>{counter}</output>
          </>
     )
}