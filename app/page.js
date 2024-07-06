"use client";

// import { About, Contact, Experience, Hero } from "./components";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
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
      <Contact />
    </main>
  );
}
