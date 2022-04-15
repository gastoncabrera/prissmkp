import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  const comments = [
    {
      id: 1,
      image: "tian-removebg-preview.png",
      comment: "Amé ése trabajo!! Impecable 😍💖",
      red_social: "Instagram",
      link: "tian.makeup",
    },
    {
      id: 2,
      image: "andrea-removebg-preview.png",
      comment: "Sos un geniaaaa❤️❤️",
      red_social: "Instagram",
      link: "andreaorianaalmiron",
    },
    {
      id: 3,
      image: "azul_fierro-removebg-preview.png",
      comment: "Geniaa❤️",
      red_social: "Instagram",
      link: "azul_fierro_",
    },
    {
      id: 4,
      image: "fiamma-removebg-preview.png",
      comment: "Graciassss!!! Muy lindooooo @prismakeupartist @prisci.es",
      red_social: "Instagram",
      link: "fiammaraceli",
    },
    {
      id: 5,
      image: "natalia-removebg-preview.png",
      comment: "Muy lindo",
      red_social: "Instagram",
      link: "nathyspinoza27",
    },
    // {
    //   id: 6,
    //   image: "",
    //   comment: "",
    //   red_social: "",
    //   link: "",
    // },
    // {
    //   id: 7,
    //   image: "",
    //   comment: "",
    //   red_social: "",
    //   link: "",
    // },
    // {
    //   id: 8,
    //   image: "",
    //   comment: "",
    //   red_social: "",
    //   link: "",
    // },
    // {
    //   id: 9,
    //   image: "",
    //   comment: "",
    //   red_social: "",
    //   link: "",
    // },
    // {
    //   id: 10,
    //   image: "",
    //   comment: "",
    //   red_social: "",
    //   link: "",
    // },
  ];
  return (
    <>
      <Swiper
        breakpoints={{
          370: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
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
        {comments.map((item) => (
          <SwiperSlide>
            <div className={`${styles["container"]}`}>
              <div className={`${styles["circle"]}`}>
                <img
                  src={`/testimonio/${item.image}`}
                  alt=""
                  className={`${styles["img"]}`}
                />
              </div>
              <p className={`${styles["description"]}`}>{item.comment}</p>
              <div className={`${styles["social_profile__wrap"]}`}>
                {item.red_social === "Instagram" && (
                  <Icon
                    icon="akar-icons:instagram-fill"
                    className={styles["instagram_ico"]}
                  />
                )}
                <span className={`${styles["social_profile"]}`}>{item.link}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
