import React from 'react'
import logo from "../images/greentext.png"
import { useState } from 'react';
import {Link} from "react-router-dom"

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {

        setMenuOpen(!menuOpen);

    }

    return (
        

        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/'><img src={logo} className='logo-nav' /></a>
            {/* mobile nav bar*/}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><a href="" onClick={toggleMenu}>About</a></li>
                <li><a href="#menu-header"onClick={toggleMenu}>Menu</a></li>
              
                <li><Link to="/booking"onClick={toggleMenu}>Reservation</Link></li>
                <li><a href="" onClick={toggleMenu}>Order Online</a></li>
              
            </ul>


        </nav>
    )

}

export default Nav;