import React from "react";
import styles from "./styles.module.scss";
import Form from "./../Shared/Form/Index";
import { Icon } from "@iconify/react";

export default function () {
  return (
    <div className={`${styles["contact_me"]}`} id="contacto">
      <div
        className={`${styles["contact_me__container"]} custom_container custom_container--xxl`}
      >
        <div className={`${styles["contact_me_left"]}`}>
          <Form />
        </div>
        <div className={`${styles["contact_me_right"]}`}>
          <h2 className={`${styles["contact_me__title"]}`}>Contáctame</h2>
          <p className={`${styles["contact_me__description"]}`}>
            Si te gustaría contratar mis servicios o conocer más de alguno en particular,
            no dudes en contactarme y en la brevedad me contactaré contigo.
          </p>
          <a
            className={`${styles["content"]}`}
            href="mailto:priscilaevelinespinoza@gmail.com"
          >
            <div className={`${styles["button"]}`}>
              <Icon icon="carbon:email" className={`${styles["icon"]}`} />
              <span className={`${styles["texto"]}`}>
                priscilaevelinespinoza@gmail.com
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
