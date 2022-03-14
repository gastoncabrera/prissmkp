import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

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
          <div>
            <ul>
              <li>
                <Link href={"/"}>
                  <a className={styles[""]} target="_blank">
                    Instagram
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a className={styles[""]} target="_blank">
                    Facebook
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
