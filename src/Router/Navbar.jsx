import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Router.css';

const Navbar = () => {
    return (
        <div className="mt-4 mb-2">
        {/* <Link to='/'>About </Link>
        <Link to='/contact'> Contact</Link> */}
        <NavLink exact to='/' activeClassName="active_class">About </NavLink>
            
        <NavLink exact to='/contact' activeClassName="active_class"> Contact</NavLink>
            
        <NavLink exact to='/service' activeClassName="active_class"> Service</NavLink>
            
        <NavLink exact to='/search' activeClassName="active_class"> Search</NavLink>

        <NavLink exact to='/user' activeClassName="active_class"> User</NavLink>
        
        <NavLink exact to='/user/Arafat/bro' activeClassName="active_class"> User</NavLink>
            
        </div>
    )
}
export default Navbar;