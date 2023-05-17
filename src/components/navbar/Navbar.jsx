import React from "react";
import {RiMenu3Line, RiCloseLin} from "react-icons/ri";
import "./navbar.css";

// Block Element Modifier
const Navbar = () => {
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo"></div>
            <img src={logo} lt="logo" />
            </div>
        </div>
    )
}

export default Navbar