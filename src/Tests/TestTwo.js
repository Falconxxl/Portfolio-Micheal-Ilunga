import '../Components/Hamburger.css';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function TestTwo() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (

        <>

        <div className="navbar-hamburger">
            <button
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className={`menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <button
                            className="menu-button"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Services
                        </button>
                        <ul className={`submenu ${servicesOpen ? "open" : ""}`}>
                            <li>Audio Visual</li>
                            <li>Webdesign</li>
                            <li>Brand Identity</li>
                            <li>Music</li>
                        </ul>
                    </li>
                    <li><button className="menu-button">Portfolio</button></li>
                    <li><button className="menu-button">Our Mission</button></li>
                    <li><button className="menu-button">About</button></li>
                    <li><button className="menu-button">News</button></li>
                    <li><button className="menu-button">Contact</button></li>
                </ul>
            </nav>
        </div>

      </>
    );
}

export default TestTwo;