import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
      
      <nav className="navbar">
        <div className="container">
        <div className="logo">
         <img src={logo} alt="" />
        </div>
        <ul>
            <li>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/mange">Mange Inventory</a>
                <a href="/login">Log In</a>
            </li>
        </ul>
        </div>
        </nav>
    );
};

export default Header;