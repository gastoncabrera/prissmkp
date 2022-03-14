import React from "react";
import styles from "./styles.module.scss";
import Carousel from "../Carousel";

export default function Index() {
  return (
    <div className={`${styles["testimonial"]} custom_container custom_container--xxl`}>
      <div className={`${styles["testimonial__top"]} `}>
        <span className={`${styles["profile__name"]}`}>
          <div className={`${styles["profile__separator"]}`}></div>
          Testimonios
        </span>
        <h2 className={`${styles["testimonio__title"]}`}>Lo que ellas dicen</h2>
      </div>
      <Carousel />
    </div>
  );
}
