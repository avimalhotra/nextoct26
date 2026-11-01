"use client";

import React, { useState } from "react";

export default function FormData(){
     
     const [form,setForm]=useState({name:"",email:"",pass:""});
     

     async function handleSubmit(e:React.SubmitEvent){
          e.preventDefault();
          console.log("Form Submitted");

         try{
               const x=await fetch("/api/signup",{method:"POST",body:JSON.stringify(form)});
               if(!x.ok){ throw new Error(x.status) }
               const y=await x.json();
               console.log(y);
               
         }
         catch(err){
              console.warn(err);
         }

     }

     return (
          <div className="rounded p-3 my-3 shadow shadow-blue-700">
               <h3 className="text-2xl font-bold">Form Data</h3>
               <form onSubmit={handleSubmit} method="post">
                    <div className="my-3">
                         <label>Name: <input type="text" name="name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required className="border rounded"/></label>
                    </div>    
                    <div className="my-3">
                         <label>Email: <input type="email" name="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="border rounded"/></label>
                    </div>
                    <div className="my-3">     
                         <label>Password: <input type="password" name="pass" value={form.pass} onChange={e=>setForm({...form, pass:e.target.value})} required className="border rounded"/></label>
                    </div>
                    <div className="my-3">     
                         <button className="border py-1 px-3 shadow rounded hover:bg-blue-900 hover:text-white">Send</button>
                    </div>
               </form>
          </div>
     )
}