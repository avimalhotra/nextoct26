import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Nav";
import Link from "next/link";

export default function PageNotFound(){
     return (
          <div className="container m-auto">
               <Header title="Loading"></Header>
               <Navbar></Navbar>
               <main className="p-3">
                    <h2 className="font-bold text-3xl mb-3">Please Wait</h2>
               </main>
               <Footer></Footer>
          </div>
     )
}