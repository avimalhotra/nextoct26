import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Nav";
import Link from "next/link";

export default function PageNotFound(){
     return (
          <div className="container m-auto">
               <Header title="404"></Header>
               <Navbar></Navbar>
               <main className="p-3">
                    <h2 className="font-bold text-3xl mb-3">Page Not Found</h2>
                    <p>Go to <Link className="text-blue-900 font-bold" href="/">Homepage</Link> </p>
               </main>
               <Footer></Footer>
          </div>
     )
}