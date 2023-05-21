import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { MyContext } from "./Contextbox";

export default function ShortsApp() {
  const { shortsFetch } = useContext(MyContext);
  return (
    <>
      <Swiper
        navigation={false}
        modules={[Pagination, Navigation]}
        // slidesPerView={3}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          280: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 6,
          },
        }}
        className="mySwiper max-w-screen">
        {shortsFetch}
      </Swiper>
    </>
  );
}
