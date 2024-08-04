import React from "react";
import IntroWrapper from "./IntroWrapper";
import "../../styles/main.css";
import CarouselWrapper from "../main/CarouselWrapper";
import CarouselSection from "../main/CarouselSection";
import HomeFeatures from "./HomeFeatures";
export default function MainWrapper() {
  return (
    <div className="main-wrapper">
      <IntroWrapper />
      <HomeFeatures />
      {/* <CarouselSection /> */}
    </div>
  );
}
