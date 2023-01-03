import React from 'react';
import "./rightNavbar.css";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  li {
    padding: 18px 10px;
  }
  
  @media (max-width: 768px) {
    
    flex-flow: column nowrap;
    background-color: #0F001F;
    opacity: 0.90;
    z-index: 10;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 270px;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
    }
  }
`;
function RightNavbar({open}) {
    return (
        <Ul open={open}>
            <li>
                <a href="#services">Services</a>
            </li>
            <li>
                <a href="#solutions">Solutions</a>
            </li>
            <li>
                <a href="#about_us">About Us</a>
            </li>
            <li>
                <a href="#whitepaper">Whitepaper</a>
            </li>
            <li>
                <a href="#faq">FAQ</a>
            </li>
        </Ul>
    );
}

export default RightNavbar;