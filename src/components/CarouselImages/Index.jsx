import React, { useRef, useState } from "react";
// Import Swiper React components
import Styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        breakpoints={{
          370: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/PYF_9164.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/PYF_9164.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/PYF_9164.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/PYF_9164.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/PYF_9164.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/PYF_9164.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/PYF_9164.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/PYF_9164.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/PYF_9164.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
