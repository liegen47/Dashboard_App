import React from "react";
import "./scss/MyNavbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/Todos" className="navbar__link">
            Todos
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/Resume" className="navbar__link">
            Resume
          </Link>
        </li>
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
          <button className="toggle-btn" onClick={toggleDropdown}>
            Toggle Dropdown
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default MyNavbar;
