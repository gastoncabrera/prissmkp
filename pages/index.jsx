import Head from "next/head";
import Hero from "../src/components/Hero/Index.jsx";
import Header from "../src/components/Header/Index.jsx";
import Main from "../src/components/Main/Index.jsx";
import CarouselImages from "../src/components/CarouselImages/Index.jsx";
import Testimonial from "../src/components/Testimonial/Index.jsx";
import Contactame from "../src/components/Contactame/Index.jsx";
import Footer from "../src/components/Footer/Index.jsx";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Maquillaje Profesional</title>
        <link rel="icon" href="/l-removebg-preview.ico" />
      </Head>
      <Header />
      <Hero />
      <Main />
      <div id="galeria">
        <CarouselImages />
      </div>
      <Testimonial />
      <Contactame />
      <Footer />
    </div>
  );
}
