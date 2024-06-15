"use client";

// import { About, Contact, Experience, Hero, Navbar, Tech } from "./components";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="bg-primary">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
