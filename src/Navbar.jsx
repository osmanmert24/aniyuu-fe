import { NavLink } from "react-router-dom"

export default function Navbar () {

    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    )
}