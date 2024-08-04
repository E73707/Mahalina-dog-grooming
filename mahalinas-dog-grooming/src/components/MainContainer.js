import React from "react";
import HeaderWrapper from "./header/HeaderWrapper";
import MainWrapper from "./main/MainWrapper";
import CarouselWrapper from "./main/CarouselWrapper";

export default function MainContainer() {
  return (
    <div className="main-container">
      <HeaderWrapper />
      <MainWrapper />
      {/* <CarouselWrapper /> */}
    </div>
  );
}
