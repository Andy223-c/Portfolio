import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import Skill from "./pages/Skill";

function App() {
  return (
    /* The main wrapper should have the background classes. 
      'min-h-screen' ensures the background covers the whole page even if content is short.
    */
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 transition-colors duration-500">
      {/* Header should contain your ThemeToggle component */}

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Skill />
        </section>

        <section id="project">
          <Project />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
