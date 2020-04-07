import React from "react";
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react';


const Navbar = () => {
  const [value, setValue] = useState();
  window.onscroll = () => {
    const offsetTop = document.scrollingElement.scrollTop;
    const currentViewPort = document.scrollingElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const usedScroll = (offsetTop/(currentViewPort-windowHeight))*100
    setValue(usedScroll)
   }

  return (
    <header>
      <div style={{width: value+'%'}} className="progress-bar"></div>
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
            <NavLink to="/contact">Contact</NavLink>
          </li>
        
          
        </ul>
      </div>
    </nav>
        </div>
    </header>
  );
};

export default Navbar