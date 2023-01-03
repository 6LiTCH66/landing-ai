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
                {/*<div className="links">*/}
                {/*    <p>*/}
                {/*        <a href="#services">Services</a>*/}
                {/*    </p>*/}
                {/*    <p>*/}
                {/*        <a href="#solutions">Solutions</a>*/}
                {/*    </p>*/}
                {/*    <p>*/}
                {/*        <a href="#about_us">About Us</a>*/}
                {/*    </p>*/}
                {/*    <p>*/}
                {/*        <a href="#whitepaper">Whitepaper</a>*/}
                {/*    </p>*/}
                {/*    <p>*/}
                {/*        <a href="#faq">FAQ</a>*/}
                {/*    </p>*/}
                {/*</div>*/}
                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox"/>
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>

                    <ul className="menu__box">
                        <li><a className="menu__item" href="#">Home</a></li>
                        <li><a className="menu__item" href="#">About</a></li>
                        <li><a className="menu__item" href="#">Team</a></li>
                        <li><a className="menu__item" href="#">Contact</a></li>
                        <li><a className="menu__item" href="#">Twitter</a></li>
                    </ul>
                </div>

            </div>



        </div>
    );
}

export default Navbar;