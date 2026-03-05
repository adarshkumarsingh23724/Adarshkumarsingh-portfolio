import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./sections/About";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Languages from "./sections/Languages";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <div className="relative gradient text-white">
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Languages />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
