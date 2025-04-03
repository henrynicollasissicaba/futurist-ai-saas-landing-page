import Companies from "./components/sections/Companies";
import Features from "./components/sections/Features";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Features />
    </>
  );
}
