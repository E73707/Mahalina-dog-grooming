import React, { useState, useEffect } from "react";
import IntroWrapper from "./IntroWrapper";
import "../../styles/main.css";
import HomeFeatures from "./HomeFeatures";
import Offers from "./Offers";
import Testimonials from "./Testimonials";
import CarouselSection from "./CarouselSection";

export default function MainWrapper() {
  return (
    <div className="main-wrapper">
      <IntroWrapper />
      <HomeFeatures />
      {/* <CarouselSection /> */}
      <Offers />
      <Testimonials />
    </div>
  );
}
