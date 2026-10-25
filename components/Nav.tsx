import Link from "next/link";

export default function Navbar(){
     return (
          <nav className="p-3 bg-blue-800">
               <ul className="flex gap-3">
                    <li><Link className="text-white p-2 hover:bg-white hover:text-black" href="/">Home</Link></li>
                    <li><Link className="text-white p-2 hover:bg-white hover:text-black" href="/about">About Us</Link></li>
                    <li><Link className="text-white p-2 hover:bg-white hover:text-black" href="/products">Products</Link></li>
                    <li><Link className="text-white p-2 hover:bg-white hover:text-black" href="/contact">Contact Us</Link></li>
                    <li className="ml-auto"><a className="text-white p-2 hover:bg-white hover:text-black" href="https://www.techaltum.com/" target="_blank">Tech Altum</a></li>
               </ul>
          </nav>
     )
}