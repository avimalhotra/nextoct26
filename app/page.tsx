import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Nav";
import Counter from "@/components/Counter";

export default function Home(){

    async function saveData(formData:FormData){
      "use server";

      const name=formData.get("name");
      const email=formData.get("email");
      const pass=formData.get("pass");

      console.log(name, email, pass);
      
    }

  return (
    <div className="container m-auto">
       <Header title="Homepage"></Header>
       <Navbar></Navbar>
        <main className="p-3">
            <h2 className="font-bold text-3xl">Welcome to Homepage</h2>
            {/* <p>{ process.env.NODE_ENV }</p> */}
            <p>{ process.env.API_KEY}</p>
            <p>{ process.env.NEXT_PUBLIC_API_ID}</p>
            <hr />
            {/* <Counter></Counter> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus repellat quis vitae ea maxime sit. Saepe maiores quis nesciunt labore voluptate, laudantium eum illo magni quos aut itaque ad.</p>
          <h3>Server Actoion</h3>
           <form action={saveData}>
                    <div className="my-3">
                         <label>Name: <input type="text" name="name" required className="border rounded"/></label>
                    </div>    
                    <div className="my-3">
                         <label>Email: <input type="email" name="email" required className="border rounded"/></label>
                    </div>
                    <div className="my-3">     
                         <label>Password: <input type="password" name="pass" required className="border rounded"/></label>
                    </div>
                    <div className="my-3">     
                         <button className="cursor-pointer border py-1 px-3 shadow rounded hover:bg-blue-900 hover:text-white">Send</button>
                    </div>
            </form>
                 

        </main>
        <Footer></Footer>
    </div>
  );
}
