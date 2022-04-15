import React from "react";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Index({ menu, setMenu }) {
  return (
    <div
      className={menu ? `${styles["menu"]}` : `${styles["menu"]} ${styles["menu--none"]}`}
    >
      <Icon
        icon="ci:close-big"
        onClick={() => setMenu(!menu)}
        className={`${styles["close"]}`}
      />
      <ul className={`${styles["navbar__list"]} `}>
        <li className={styles["navbar__item"]} onClick={() => setMenu(!menu)}>
          <Link href={"#sobremi"}>
            <a className={styles["navbar__link"]}>Sobre mi</a>
          </Link>
        </li>
        <li className={styles["navbar__item"]} onClick={() => setMenu(!menu)}>
          <Link href={"#servicios"}>
            <a className={styles["navbar__link"]}>Servicios</a>
          </Link>
        </li>
        <li className={styles["navbar__item"]} onClick={() => setMenu(!menu)}>
          <Link href={"#galeria"}>
            <a className={styles["navbar__link"]}>Galeria</a>
          </Link>
        </li>
        <li className={styles["navbar__item"]} onClick={() => setMenu(!menu)}>
          <Link href={"#contacto"}>
            <a className={styles["navbar__link"]}>Contacto</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
