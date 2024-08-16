import React from "react";

import HomeFeatures from "./HomeFeatures";
import Offers from "./Offers";
import Testimonials from "./Testimonials";
import CarouselSection from "./CarouselSection";
import "../../styles/main.css";
import Prices from "./Prices";
import Footer from "./Footer";

export default function MainWrapper2() {
  return (
    <div className="main-wrapper">
      <HomeFeatures />
      <Offers />
      <Prices />
      <Testimonials />
      <Footer />
    </div>
  );
}
