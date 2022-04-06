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
            <img className={Styles["img"]} src="/carousel/PYF_9518.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img
              className={Styles["img"]}
              src="/carousel/IMG-20220305-WA0079.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/carousel/DSC00576.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/carousel/PYF_9160.jpg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/carousel/PYF_0154.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img
              className={Styles["img"]}
              src="/carousel/PicsArt_11-30-02.51.58.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/carousel/PYF_9006.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/carousel/1649034939249.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/carousel/1 (452).jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/carousel/2 (68) (1).jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles["cont"]}>
            <img className={Styles["img"]} src="/carousel/1 (84).jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
