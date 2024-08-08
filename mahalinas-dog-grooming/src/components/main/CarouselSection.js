import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import { motion, animate, useMotionValue } from "framer-motion";

import "../../styles/CarouselSection.css";
import Dog1 from "../../img/cute.jpg";
import dog3 from "../../img/doodle.jpg";
import dog4 from "../../img/lilguy.jpg";
import dog5 from "../../img/pug.jpg";
import dog6 from "../../img/puppies.jpg";
import dog7 from "../../img/shep.jpg";
import Card from "./Card";

function CarouselSection() {
  const images = [Dog1, dog3, dog4, dog5, dog6, dog7];
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);
  return (
    <div className="motion-wrapper">
      <motion.div
        className="carousel-section"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...images, ...images].map((image, index) => (
          <Card image={image} key={index} /> // Return a Card component for each image
        ))}
      </motion.div>
    </div>
  );
}

export default CarouselSection;
