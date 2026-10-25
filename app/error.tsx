"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Nav";


export default function PageNotFound(){
     return (
          <div className="container m-auto">
               <Header title="Error"></Header>
               <Navbar></Navbar>
               <main className="p-3">
                    <h2 className="font-bold text-3xl mb-3">Error page</h2>
                    <p>Pleased Reload</p>
               </main>
               <Footer></Footer>
          </div>
     )
}