import "../styles/globals.scss";
import { FormspreeProvider } from "@formspree/react";

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1898000560506797458">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp;
