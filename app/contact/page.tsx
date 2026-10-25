import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Nav";
import Counter from "@/components/Counter";

export default function Contact(){
     return (
          <div className="container m-auto">
               <Header title="Contact Us"></Header>
               <Navbar></Navbar>
               <main className="p-3">
                    <h2 className="font-bold text-3xl">Contact US Page</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus repellat quis vitae ea maxime sit. Saepe maiores quis nesciunt labore voluptate, laudantium eum illo magni quos aut itaque ad.</p>

                    <hr className="my-4" />

                    <Counter></Counter>
               </main>
               <Footer></Footer>
          </div>
     )
}