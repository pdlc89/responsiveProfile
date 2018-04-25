import React from "react";
import Bunny from "./bunny.png"
import "./Navbar.css";


const Navbar = props => (
    <nav className="sidenav">
        <img className="bunny" src={Bunny} alt="img" />
        <a id="about-me">About</a>
        <a id="my-work">Work</a>
        <a href="https://www.linkedin.com/in/pedro-de-la-cruz-martinez-062620101/">LinkedIn</a>
        <a id="contact">Contact</a>
    </nav>
);

export default Navbar;