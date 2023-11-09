import React from "react";
import { BrowserRouter } from "react-router-dom";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 br-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Interests />
        <Projects />
        <Education />
        <Tech />
        <Contacts />
      </div>
    </BrowserRouter>
  )
}

export default App
