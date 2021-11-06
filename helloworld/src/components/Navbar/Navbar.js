import React from "react";
import "./Navbar.css"
import {NavLink} from "react-router-dom"

function Navbar(){
    return (
        <div className="navbar"> 
            <NavLink to="/p">Profile</NavLink>
            <NavLink to="/messager">Messager</NavLink>
            <NavLink to="/users">Users</NavLink>
        </div>
    )
}

export default Navbar