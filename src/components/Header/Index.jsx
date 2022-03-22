import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Index() {
  return (
    <div className={`${styles["header"]} `}>
      <div
        className={`${styles["header__container"]} custom_container custom_container--xxxl`}
      >
        <div className={`${styles["header__left"]} `}>
          <div className={`${styles["header__logo"]} `}>PrisMKP</div>
        </div>
        <div className={`${styles["header__right"]} `}>
          <Icon icon="bx:menu-alt-right" className={`${styles["header__icon"]} `} />
          <nav className={`${styles["navbar"]} `}>
            <ul className={`${styles["navbar__list"]} `}>
              <li className={styles["navbar__item"]}>
                <Link href={"/"}>
                  <a className={styles["navbar__link"]} target="_blank">
                    Inicio
                  </a>
                </Link>
              </li>
              <li className={styles["navbar__item"]}>
                <Link href={"/"}>
                  <a className={styles["navbar__link"]} target="_blank">
                    Sobre mi
                  </a>
                </Link>
              </li>
              <li className={styles["navbar__item"]}>
                <Link href={"/"}>
                  <a className={styles["navbar__link"]} target="_blank">
                    Galeria
                  </a>
                </Link>
              </li>
              <li className={styles["navbar__item"]}>
                <Link href={"/"}>
                  <a className={styles["navbar__link"]} target="_blank">
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={`${styles["social"]}`}>
            <ul className={`${styles["social__list"]}`}>
              <li className={`${styles["social__item"]}`}>
                <Link href={"/"}>
                  <a className={styles["instagram"]} target="_blank">
                    <Icon
                      icon="akar-icons:instagram-fill"
                      className={styles["instagram_ico"]}
                    />
                  </a>
                </Link>
              </li>
              <li className={`${styles["social__item"]}`}>
                <Link href={"/"}>
                  <a className={styles["facebook"]} target="_blank">
                    <Icon icon="bxl:facebook" className={styles["facebook_ico"]} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
