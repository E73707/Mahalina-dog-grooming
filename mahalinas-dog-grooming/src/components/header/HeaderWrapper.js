import React from "react";
import "../../styles/navTabs.css";

export default function HeaderWrapper() {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="selector" href="#home">
          Home
        </a>
        <a className="selector" href="#services">
          Services
        </a>
        <a className="selector" href="#about">
          About
        </a>
        <a className="selector" href="#contact">
          Contact
        </a>
      </nav>
      <nav className="navbar-right">
        <a id="book-now" className="selector-2" href="#book-now">
          Book now
        </a>
        <a id="learn-more" className="selector-2" href="#learn-more">
          Learn more
        </a>
      </nav>
    </header>
  );
}
