import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Nav";

export default function PageNotFound(){
     return (
          <div className="container m-auto">
               <Header title="API"></Header>
               <Navbar></Navbar>
               <main className="p-3">
                    <h2 className="font-bold text-3xl mb-3">Available APIs</h2>
                    <ol className="list-decimal ps-6 font-medium">
                         <li><a className="text-blue-900" href="/api/cars" target="_blank">Cars API</a></li>
                         <li><a className="text-blue-900" href="/api/bikes" target="_blank">Bikes API</a></li>
                    </ol>
               </main>
               <Footer></Footer>
          </div>
     )
}