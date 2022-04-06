import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";

export default function () {
  return (
    <div className={`${styles["footer"]}`}>
      <div
        className={`${styles["footer__container"]} custom_container custom_container--xxxl`}
      >
        <div className={`${styles["footer__left"]}`}>
          <span className={`${styles["footer__logo"]}`}>PrisMKP</span>
          <div className={`${styles["footer_ubication__wrap"]}`}>
            <Icon
              icon="pepicons:pinpoint"
              className={`${styles["footer_ubication__icon"]}`}
            />
            <span className={`${styles["footer_ubication__title"]}`}>
              Corrientes, Argentina
            </span>
          </div>
        </div>
        <div className={`${styles["footer__right"]}`}>
          <ul className={`${styles["footer__list"]}`}>
            <Link
              href={`https://www.instagram.com/pris.mkp/?hl=es`}
              className={`${styles["footer__item"]}`}
            >
              <a className={`${styles["footer__link"]}`}>
                <Icon
                  icon="akar-icons:instagram-fill"
                  className={`${styles["footer__icon"]} ${styles["footer__icon--instagram"]}`}
                />
              </a>
            </Link>
            <Link
              href={`https://m.facebook.com/maquillajecorrientes/`}
              className={`${styles["footer__item"]}`}
            >
              <a className={`${styles["footer__link"]}`}>
                <Icon
                  icon="brandico:facebook"
                  className={`${styles["footer__icon"]} ${styles["footer__icon--facebook"]}`}
                />
              </a>
            </Link>
            {/* <Link
              href={`https://wa.me/+153794703562`}
              className={`${styles["footer__item"]}`}
            >
              <a className={`${styles["footer__link"]}`}>
                <Icon
                  icon="akar-icons:whatsapp-fill"
                  className={`${styles["footer__icon"]} ${styles["footer__whatsapp"]}`}
                />
              </a>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
