"use client";

// import { About, Contact, Experience, Hero } from "./components";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import AboutDomains from "./components/AboutDomains";
import AboutLanguages from "./components/AboutLanguages";
import Experience from "./components/Experience";


export default function Home() {
  return (
    <main className="bg-primary-dark">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        {/* <Navbar /> */}
        <Hero />
      </div>
      <Experience />
      <About />
      <AboutDomains />
      <AboutLanguages />
      <Contact />
    </main>
  );
}
