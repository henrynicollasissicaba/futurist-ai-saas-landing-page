import CallToAction from "./components/sections/CallToAction";
import Companies from "./components/sections/Companies";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
