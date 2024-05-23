"use client";

// import { About, Contact, Experience, Hero, Navbar, Tech } from "./components";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="">
      {/* @/Private/path/to/file */}
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        {/* <div className='bg-cover bg-no-repeat bg-center'> */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>

    </main>
  );
}
