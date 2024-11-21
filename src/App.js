import { createContext, useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Technology from "./components/technologies";
import "./index.css";
import ScrollButton from "./components/scrollButton";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  console.log("theme is : ", theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="overflow-x-hidden text-neutral-300 antialiased  selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className={`absolute top-0 z-[-2] h-screen w-screen ${
              theme == "dark"
                ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
                : "bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
            }`}
          />
        </div>

        <div className={`container mx-auto px-8 ${theme}`}>
          <Navbar />
          <Hero />
          <About />
          <Technology />
          <Experience />
          <Projects />
          <Contact />
          <ScrollButton />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
