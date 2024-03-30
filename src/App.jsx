import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="text-black ">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
