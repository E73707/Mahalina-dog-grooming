import React, { useState } from "react";
import logo from "../../img/1.png";
import "../../styles/navTabs.css";
import EmailPopup from "../main/EmailModal";

export default function DesktopNavbar() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    console.log("TRUE");
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a className="selector" href="#logo">
          <img className="nav-logo" src={logo} alt="logo" />
        </a>
        <a className="selector" href="#home">
          Home
        </a>
        <a className="selector" href="#services">
          Services
        </a>
        <a className="selector">About</a>
        <a onClick={handleOpenPopup} className="selector" href="#contact">
          Contact
        </a>
      </nav>
      <nav className="navbar-right">
        <a
          onClick={handleOpenPopup}
          id="book-now"
          className="selector-2"
          href="#book-now"
        >
          Book now
        </a>
        <a id="learn-more" className="selector-2" href="#learn-more">
          Learn more
        </a>
      </nav>

      {showPopup && <EmailPopup onClose={handleClosePopup} />}
    </header>
  );
}
