import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className="container">
        <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
  Products
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/product">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        
          
        </ul>
      </div>
    </nav>
        </div>
    </header>
  );
};

export default Navbar