import React, { useState, useEffect } from "react";
import "../../styles/navTabs.css";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function HeaderWrapper({ sendDataToParent }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = (data) => {
    setIsOpen(data);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 890);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header-wrapper">
      {isMobile ? (
        <MobileNavbar sendDataToParent={handleDropdownToggle} />
      ) : (
        <DesktopNavbar />
      )}
      <div className="dropdown-container">
        {isOpen && (
          <div className="dropdown">
            <a className="dropdown-selector" href="#home">
              {" "}
              Home{" "}
            </a>
            <a className="dropdown-selector" href="#services">
              {" "}
              Services{" "}
            </a>
            <a className="dropdown-selector" href="#about">
              {" "}
              About{" "}
            </a>
            <a className="dropdown-selector" href="#contact">
              {" "}
              Contact{" "}
            </a>
            <a className="dropdown-selector" href="#book-now">
              {" "}
              Book now{" "}
            </a>
            <a className="dropdown-selector" href="#learn-more">
              {" "}
              Learn more{" "}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
