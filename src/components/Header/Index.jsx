import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Menu from "./../Menu/Index.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Index() {
  const [menu, setMenu] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      `#header`,
      1,
      {
        // backgroundColor: "#ffffff100",
        backgroundColor: gsap.getProperty("#header", "#ffffff100"),
      },
      {
        scrollTrigger: {
          trigger: `#main`,
          // start: "top bottom",
          end: "top bottom",
          scrub: true,
        },
        // backgroundColor: "#000",
        backgroundColor: gsap.getProperty("#main", "#000"),
      }
    );
  }, []);

  return (
    <div className={`${styles["header"]} `} id={"header"}>
      <div
        className={`${styles["header__container"]} custom_container custom_container--xxxl`}
      >
        <div className={`${styles["header__left"]} `}>
          <div className={`${styles["header__logo"]} `}>PrisMKP</div>
        </div>
        <div className={`${styles["header__right"]} `}>
          <Icon
            icon="bx:menu-alt-right"
            className={`${styles["header__icon"]} `}
            onClick={() => setMenu(!menu)}
          />
          <nav className={`${styles["navbar"]} `}>
            <ul className={`${styles["navbar__list"]} `}>
              <li className={styles["navbar__item"]}>
                <Link href={"#sobremi"}>
                  <a className={styles["navbar__link"]}>Sobre mi</a>
                </Link>
              </li>
              <li className={styles["navbar__item"]}>
                <Link href={"#servicios"}>
                  <a className={styles["navbar__link"]}>Servicios</a>
                </Link>
              </li>
              <li className={styles["navbar__item"]}>
                <Link href={"#galeria"}>
                  <a className={styles["navbar__link"]}>Galeria</a>
                </Link>
              </li>
              <li className={styles["navbar__item"]}>
                <Link href={"#contacto"}>
                  <a className={styles["navbar__link"]}>Contacto</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={`${styles["social"]}`}>
            <ul className={`${styles["social__list"]}`}>
              <li className={`${styles["social__item"]}`}>
                <Link href={"https://www.instagram.com/pris.mkp/?hl=es"}>
                  <a className={styles["instagram"]} target="_blank">
                    <Icon
                      icon="akar-icons:instagram-fill"
                      className={styles["instagram_ico"]}
                    />
                  </a>
                </Link>
              </li>
              <li className={`${styles["social__item"]}`}>
                <Link href={"https://m.facebook.com/maquillajecorrientes/"}>
                  <a className={styles["facebook"]} target="_blank">
                    <Icon icon="bxl:facebook" className={styles["facebook_ico"]} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Menu menu={menu} setMenu={setMenu} />
    </div>
  );
}
