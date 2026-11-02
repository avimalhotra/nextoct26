import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Nav";
import CarsAPI from "@/components/carsapi";
import { Suspense } from "react";


export default function About(){
     return (
          <div className="container m-auto">
               <Header title="About Us"></Header>
               <Navbar></Navbar>
               <main className="p-3">
                    <h2 className="font-bold text-3xl">About Us Page</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus repellat quis vitae ea maxime sit. Saepe maiores quis nesciunt labore voluptate, laudantium eum illo magni quos aut itaque ad.</p>
                     <hr />
               
               <h3 className="text-3xl font-bold">Cars API</h3>

              <Suspense fallback={<p className="text-4xl font-bold">Loading Cars Data</p>}>
                  <CarsAPI></CarsAPI>  
              </Suspense>   
               </main>
               <Footer></Footer>
          </div>
     )
}

export const metadata = {
  title: "About US Page",
  description: "A description of my Next.js app",
  openGraph: {
    title: "About US Page",
    description: "A description of my Next.js app",
  },
};