import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";

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
        // slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className={`${styles["swiper_container"]}`}
      >
        <SwiperSlide>
          <div className={`${styles["container"]}`}>
            <div className={`${styles["circle"]}`}>
              <img src="/PYF_9164.jpg" alt="" className={`${styles["img"]}`} />
            </div>
            <p className={`${styles["description"]}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero dicta
              omnis deleniti et, explicabo vitae libero, reiciendis expedita odit quia ad
              temporibus.
            </p>
            <div>
              logo
              <span className={`${styles["social_profile"]}`}>Perfildellaredsocial</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles["container"]}`}>
            <div className={`${styles["circle"]}`}>
              <img src="/PYF_9164.jpg" alt="" className={`${styles["img"]}`} />
            </div>
            <p className={`${styles["description"]}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero dicta
              omnis deleniti et, explicabo vitae libero, reiciendis expedita odit quia ad
              temporibus.
            </p>
            <div>
              logo
              <span className={`${styles["social_profile"]}`}>Perfildellaredsocial</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles["container"]}`}>
            <div className={`${styles["circle"]}`}>
              <img src="/PYF_9164.jpg" alt="" className={`${styles["img"]}`} />
            </div>
            <p className={`${styles["description"]}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero dicta
              omnis deleniti et, explicabo vitae libero, reiciendis expedita odit quia ad
              temporibus.
            </p>
            <div>
              logo
              <span className={`${styles["social_profile"]}`}>Perfildellaredsocial</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles["container"]}`}>
            <div className={`${styles["circle"]}`}>
              <img src="/PYF_9164.jpg" alt="" className={`${styles["img"]}`} />
            </div>
            <p className={`${styles["description"]}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero dicta
              omnis deleniti et, explicabo vitae libero, reiciendis expedita odit quia ad
              temporibus.
            </p>
            <div>
              logo
              <span className={`${styles["social_profile"]}`}>Perfildellaredsocial</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles["container"]}`}>
            <div className={`${styles["circle"]}`}>
              <img src="/PYF_9164.jpg" alt="" className={`${styles["img"]}`} />
            </div>
            <p className={`${styles["description"]}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero dicta
              omnis deleniti et, explicabo vitae libero, reiciendis expedita odit quia ad
              temporibus.
            </p>
            <div>
              logo
              <span className={`${styles["social_profile"]}`}>Perfildellaredsocial</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
