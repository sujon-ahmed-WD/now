import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct import statement

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
 

const Carsol = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/YQKhvt8/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/KzKwst5/2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/FKG8HKP/3.jpg" alt="" /></SwiperSlide>
 
 
      </Swiper>
    </div>
  );
};

export default Carsol;
