import React from 'react';
import "./navbar.css"
import Burger from "./burger/Burger";
function Navbar(props) {
    return (
        <div className="navbar-container">

            <div className="navbar-links_logo">
                <p>
                    Company
                </p>
            </div>

            <div className="navbar-links_container">
               <Burger/>
            </div>

        </div>
    );
}

export default Navbar;