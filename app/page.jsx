"use client";

// import { About, Contact, Experience, Hero } from "./components";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import DomainCards from "./components/DomainCards";
import LanguageCards from "./components/LanguageCards";
import Experience from "./components/Experience";
import Mission from "./components/Mission";


export default function Home() {
  return (
    <main className="bg-primary-dark">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        {/* <Navbar /> */}
        <Hero />
      </div>
      {/* <Mission /> */}
      <Experience />
      <About />
      <DomainCards />
      <LanguageCards />
      <Contact />
      {/* The following pads below the last entry so that following
            the link will place the anchor at the top of the screen */}
      <div className='min-h-screen flex flex-grow' />
    </main>
  );
}
