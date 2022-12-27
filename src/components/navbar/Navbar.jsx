import React from 'react';
import "./navbar.css"

function Navbar(props) {
    return (
        <div className="navbar-container">
            <div className="navbar-links_logo">
                <p>
                    <a href="#company">Company</a>
                </p>
            </div>

            <div className="navbar-links_container">
                <p>
                    <a href="#services">Services</a>
                </p>
                <p>
                    <a href="#solutions">Solutions</a>
                </p>
                <p>
                    <a href="#about_us">About Us</a>
                </p>
                <p>
                    <a href="#whitepaper">Whitepaper</a>
                </p>
            </div>
        </div>
    );
}

export default Navbar;