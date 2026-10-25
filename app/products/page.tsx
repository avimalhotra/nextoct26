import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Nav";
import Link from "next/link";

export default function Product(){
     return (
          <div className="container m-auto">
               <Header title="Products"></Header>
               <Navbar></Navbar>
               <main className="p-3">
                    <h2 className="font-bold text-3xl">Our Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus repellat quis vitae ea maxime sit. Saepe maiores quis nesciunt labore voluptate, laudantium eum illo magni quos aut itaque ad.</p>
               <ol>
                    <li><Link className="text-blue-700" href="/products/iphone">Iphone</Link></li>
                    <li><Link className="text-blue-700" href="/products/macbook">Macbook</Link></li>
                    <li><Link className="text-blue-700" href="/products/ipad">Ipad</Link></li>
               </ol>
               </main>
               <Footer></Footer>
          </div>
     )
}