import React from "react";
import styles from "./styles.module.scss";

export default function Index() {
  return (
    <div className={styles["main"]}>
      <div
        className={`${styles["main__container"]} custom_container custom_container--xxl`}
      >
        <div className={`${styles["profile"]}`}>
          <div className={`${styles["profile_left"]}`}>
            <img src="/PYF_9612.jpg" alt="" className={`${styles["profile__image"]}`} />
          </div>
          <div className={`${styles["profile_right"]}`}>
            <div className={`${styles["profile__wrap"]}`}>
              <span className={`${styles["profile__name"]}`}>
                <div className={`${styles["profile__separator"]}`}></div>
                Priscila Espinoza
              </span>
              <h2 className={`${styles["profile__title"]}`}>Makeup artist</h2>
              <p className={`${styles["profile__description"]}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                ducimus ab quisquam minima atque, itaque velit eligendi aspernatur
                pariatur dolor, possimus animi quis maxime illo aperiam earum, officiis
                saepe adipisci? Laboriosam nemo maxime impedit libero, unde in esse sed
                optio molestiae molestias quasi est, dolore quidem consequuntur
                reprehenderit accusantium quae debitis cum placeat ut? Facilis laudantium
                nulla facere quia repudiandae? Quis excepturi rem aperiam iusto ratione,
                dolor provident porro eveniet quia fugiat officia.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles["service"]}`}>
          <div className={`${styles["service_left"]}`}>
            <h2 className={`${styles["service__title"]}`}>Services</h2>
            <p className={`${styles["service__description"]}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus
              ab quisquam minima atque, itaque velit eligendi aspernatur pariatur dolor,
              possimus animi quis maxime illo aperiam earum, officiis saepe adipisci?
              Laboriosam nemo maxime impedit libero, unde in esse sed optio molestiae
              molestias quasi est, dolore quidem consequuntur reprehenderit accusantium
              quae debitis cum placeat ut? Facilis laudantium nulla facere quia
              repudiandae? Quis excepturi rem aperiam iusto ratione, dolor provident porro
              eveniet quia fugiat officia.
            </p>
          </div>
          <div className={`${styles["service_right"]}`}>
            <video src="/1.mp4" className={styles["service__video"]} controls>
              <source></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
