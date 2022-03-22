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
                Mi nombre es Priscila Espinoza, soy Maquilladora desde el año 2016. Con
                mis servicios busco resaltar tu belleza natural y que te sientas mas
                segura a la hora de lucirte.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles["service"]}`}>
          <div className={`${styles["service_left"]}`}>
            <h2 className={`${styles["service__title"]}`}>Services</h2>
            <p className={`${styles["service__description"]}`}>
              Maquillajes: <br />
              _Sociales <br />
              _Carnaval <br />
              _Shooting <br />
              _Novias <br />
              _Egresadas <br />
              Extenciones de pestañas <br />
              Perfilado de cejas <br />
              Tinte con Hennah
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
