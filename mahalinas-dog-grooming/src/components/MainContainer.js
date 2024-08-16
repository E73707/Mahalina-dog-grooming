import React from "react";
import HeaderWrapper from "./header/HeaderWrapper";
import MainWrapper from "./main/MainWrapper";
import CarouselSection from "./main/CarouselSection";
import MainWrapper2 from "./main/MainWrapper2";

export default function MainContainer() {
  return (
    <div className="main-container">
      <HeaderWrapper />
      <MainWrapper />
      <CarouselSection />
      <MainWrapper2 />
    </div>
  );
}
