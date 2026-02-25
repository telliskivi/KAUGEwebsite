import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Venue from "./components/Venue";
import Sponsors from "./components/Sponsors";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Venue />
        <Sponsors />
        <Register />
      </main>
      <Footer />
    </>
  );
}
