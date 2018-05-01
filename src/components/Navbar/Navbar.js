import React from "react";
import Bunny from "./bunny.png"
import "./Navbar.css";
import { Link } from "react-scroll"


const Navbar = props => (
    <nav className="sidenav">
        <Link activeClass="active" className="contact-link" to="root" spy={true} smooth={true} duration={500} ><img className="bunny" src={Bunny} alt="img" /></Link>
        <Link activeClass="active" className="links" to="about" spy={true} smooth={true} duration={500} >About</Link>
        <Link activeClass="active" className="links" to="work" spy={true} smooth={true} duration={500} >Work</Link>
        <Link activeClass="active" className="links" to="ME" spy={true} smooth={true} duration={500} >Contact</Link>
        <a href="https://www.linkedin.com/in/pedro-de-la-cruz-martinez-062620101/">LinkedIn</a>
        <p className="copy-write"> Pedro De La Cruz Martinez &#169; 2018</p>
    </nav>
);

export default Navbar;