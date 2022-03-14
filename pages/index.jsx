import Head from "next/head";
import Hero from "../src/components/Hero";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import CarouselImages from "../src/components/CarouselImages";
import Testimonial from "../src/components/Testimonial";
import Contactame from "../src/components/Contactame";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Maquillaje Profesional</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Main />
      <CarouselImages />
      <Testimonial />
      <Contactame />
    </div>
  );
}
