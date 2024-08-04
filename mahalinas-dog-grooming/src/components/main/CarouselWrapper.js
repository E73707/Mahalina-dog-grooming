import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CarouselWrapper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="C:\Users\User\Desktop\Mahalina-dog-grooming\mahalinas-dog-grooming\src\components\img\dog.png"
            alt="dog 1"
          />
          Slide 1
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="C:\Users\User\Desktop\Mahalina-dog-grooming\mahalinas-dog-grooming\src\components\img\dog.png"
            alt="dog 2"
          />
          Slide 2
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CarouselWrapper;
