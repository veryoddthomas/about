"use client";

import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import Overview from "./components/Overview";
import DomainCards from "./components/DomainCards";
import LanguageCards from "./components/LanguageCards";
import Experience from "./components/Experience";
import Mission from "./components/Mission";


export default function Home() {
  return (
    <main className="bg-primary-dark">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Welcome />
      </div>
      {/* <Mission /> */}
      <Experience />
      <Overview />
      <DomainCards />
      <LanguageCards />
      <Contact />
      {/* The following pads below the last entry so that following
            the link will place the anchor at the top of the screen */}
      <div className='min-h-screen min-w-full justify-center items-center flex flex-grow'>
        The End 😀
      </div>
    </main>
  );
}
