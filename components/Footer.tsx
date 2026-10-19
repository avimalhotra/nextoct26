export default function Footer(){
     return (
           <footer className="p-3 flex justify-between bg-green-950 text-white">
               <p>&copy; {new Date().getFullYear()}</p>
               <p>All Rights Reserved</p>
          </footer>
     )
}