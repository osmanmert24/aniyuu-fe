import { NavLink } from "react-router-dom"
 import { Logo } from "./components/Logo"

export default function Navbar () {
 
    return (
        <div className="flex justify-between h-16 px-8 items-center ">
            <div>
            <NavLink to="/home"><Logo/></NavLink>
            </div>

         
          

            <div className="flex ">
            <NavLink className="px-4 py-1 secondary-color rounded-sm font-bold" to="/login">Giriş Yap!</NavLink>
            </div>
            </div>
    
    )
}