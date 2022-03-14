import React from "react";
import styles from "./styles.module.scss";

export default function Index() {
  return (
    <div className={`${styles["hero"]}`}>
      <div className={`${styles["hero__container"]}`}>
        <img src="/PYF_9164.jpg" alt="" className={styles["hero__image"]} />
      </div>
    </div>
  );
}
