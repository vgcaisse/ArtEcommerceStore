import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu size={32} />
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <FiMenu size={32} />
        </div>
        <ul className="sidebar-menu" onClick={toggleMenu}>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCart size={24} />
              <span className="cart-label">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
