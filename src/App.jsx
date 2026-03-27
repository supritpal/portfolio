//import Test from "./Test";
import "./app.scss";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
//import Cursor from "./components/cursor/Cursor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
