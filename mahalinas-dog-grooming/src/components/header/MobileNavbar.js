import React, { useState, useEffect } from "react";
import logo from "../../img/1.png";
import "../../styles/navTabs.css";
function MobileNavbar({ sendDataToParent }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    sendDataToParent(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a className="selector" href="#logo">
          <img className="nav-logo" src={logo} alt="logo" />
        </a>
      </nav>
      <nav className="navbar-right">
        <a id="nav-toggle" className="selector-2" href="#nav-toggle">
          <button
            className={`reset-btn icon-dropdown ${isOpen ? "open" : ""}`}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </a>
      </nav>
    </header>
  );
}

export default MobileNavbar;
