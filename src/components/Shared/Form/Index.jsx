import React from "react";
import styles from "./styles.module.scss";
import { useForm, ValidationError } from "@formspree/react";

export default function Index() {
  const [state, handleSubmit] = useForm("contactMe");
  if (state.succeeded) {
    return (
      <div className={`${styles["form__congrats"]}`}>
        Muchas gracias por contactarme 🥰. <br />
        Te respondere a la mayor brevedad posible 😘.
      </div>
    );
  }
  return (
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
  );
}
