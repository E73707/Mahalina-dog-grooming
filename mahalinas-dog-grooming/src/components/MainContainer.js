import React from "react";
import HeaderWrapper from "./header/HeaderWrapper";
import MainWrapper from "./main/MainWrapper";
import CarouselSection from "./main/CarouselSection";

export default function MainContainer() {
  return (
    <div className="main-container">
      <HeaderWrapper />
      <MainWrapper />
      <CarouselSection />
    </div>
  );
}
