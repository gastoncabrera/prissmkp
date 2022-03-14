import React from "react";
import styles from "./styles.module.scss";
import { useForm, ValidationError } from "@formspree/react";

export default function () {
  const [state, handleSubmit] = useForm("signupForm");
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <div className={`${styles["contact_me"]}`}>
      <div
        className={`${styles["contact_me__container"]} custom_container custom_container--xxl`}
      >
        <div className={`${styles["contact_me_left"]}`}>
          <form className={`${styles["form"]}`} onSubmit={handleSubmit}>
            <div className={`${styles["form_field__wrap"]}`}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                className={`${styles["form_field__input"]} ${styles["form_field__input--name"]}`}
              />
            </div>
            <div className={`${styles["form_field__wrap"]}`}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`${styles["form_field__input"]} ${styles["form_field__input--email"]}`}
              />
              <ValidationError field="email" prefix="Email" errors={state.errors} />
            </div>
            <div className={`${styles["form_field__wrap"]}`}>
              <input
                type="text"
                placeholder="Mensaje"
                name="message"
                className={`${styles["form_field__input"]} ${styles["form_field__input--message"]}`}
              />
            </div>
            <button
              type="submit"
              value="Enviar"
              className={`${styles["form__button"]}`}
              disabled={state.submitting}
            >
              Submit
            </button>
            <ValidationError errors={state.errors} />
          </form>
        </div>
        <div className={`${styles["contact_me_right"]}`}>
          <h2 className={`${styles["contact_me__title"]}`}>Contáctame</h2>
          <p className={`${styles["contact_me__description"]}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur
            vero eveniet enim provident nostrum officiis, fugiat debitis. Autem
            accusantium non nulla dolores, hic exercitationem ratione architecto voluptate
            sit totam?
          </p>
          <div className={`${styles["content"]}`}>
            <div className={`${styles["button"]}`}>
              <div>Logo</div>
              <span className={`${styles["texto"]}`}>Lorem ipsum dolor</span>
            </div>
            <div className={`${styles["button"]}`}>
              <div>Logo</div>
              <span className={`${styles["texto"]}`}>Lorem ipsum dolor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
