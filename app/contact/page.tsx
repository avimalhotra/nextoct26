import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Nav";

export default function Contact(){
     return (
          <div className="container m-auto">
               <Header title="Contact Us"></Header>
               <Navbar></Navbar>
               <main className="p-3">
                    <h2 className="font-bold text-3xl">Main</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus repellat quis vitae ea maxime sit. Saepe maiores quis nesciunt labore voluptate, laudantium eum illo magni quos aut itaque ad.</p>
               </main>
               <Footer></Footer>
          </div>
     )
}