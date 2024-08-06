import React, { useState, useEffect } from "react";
import IntroWrapper from "./IntroWrapper";
import "../../styles/main.css";
import CarouselWrapper from "../main/CarouselWrapper";
import CarouselSection from "../main/CarouselSection";
import HomeFeatures from "./HomeFeatures";
import HeaderWrapper from "../header/HeaderWrapper";
import MobileNavbar from "../header/MobileNavbar";

export default function MainWrapper({ sendDataToParent }) {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [isMobile, setIsMobile] = useState(false);

  //   const handleDropdownToggle = (data) => {
  //     setIsOpen(data);
  //   };

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth < 890);
  //     };
  //     window.addEventListener("resize", handleResize);
  //     handleResize();
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  return (
    <div className="main-wrapper">
      {/* {isMobile ? (
        <MobileNavbar sendDataToParent={handleDropdownToggle} />
      ) : null} */}
      <IntroWrapper />
      <HomeFeatures />
      {/* <CarouselSection /> */}
    </div>
  );
}
