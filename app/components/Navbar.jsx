"use client";

import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { logo, menu, close } from "../assets";


const navLinks = [
  { id: "", title: "Home", },
  { id: "work", title: "Experience", },
  { id: "about", title: "Overview", },
  { id: "contact", title: "Contact Me", },
];


// const NameLogo = () => {
//   return (
//     <div className="flex flex-row items-center gap-5">
//       <Image src={logo} alt="logo" className="w-12 h-12 object-contain" />
//       <h1 className="text-white text-[20px] font-bold cursor-pointer flex">
//         <span className="text-gradient">Jason</span>
//         <span className="text-[#d0d6f9]">Burk</span>
//       </h1>
//     </div>
//   );
// };


const NameLogo = () => {
  return (
    <Link
      href='/'
      className='flex items-center gap-2'
      onClick={() => { window.scrollTo(0, 0); }}
    >
      <Image src={logo} alt='logo' className='w-9 h-9 object-contain' />
      <div className='text-primary-light hover:text-secondary-light text-[18px] font-bold cursor-pointer flex '>
        Tom Zakrajsek&nbsp;
        <span className='lg:block hidden'> &mdash; Software Engineer</span>
      </div>
    </Link>
  );
}

const FullMenu = () => {
  return (
    <ul className='list-none hidden lg:flex flex-row gap-10'>
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={'text-primary-light hover:text-secondary-light text-[18px] font-medium cursor-pointer'}
        >
          <a href={`/#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
      {/* <li
        key={'login-button'}
        className={` text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
      >
        <Button />
      </li> */}
    </ul>
  );
}

const CompressedMenu = () => {
  // I'm not sure why, but if I pass the initial toggle value in
  // it is not correctly
  const [toggle, setToggle] = useState(false);

  return (
    <div className='lg:hidden flex flex-1 justify-start items-center'>
      <Image
        src={toggle ? close : menu}
        alt='menu'
        className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggle(!toggle)}
      />

      <div
        className={`${!toggle ? "hidden" : "flex"
          } p-6 bg-primary-dark absolute top-20 left-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px]  text-primary-light hover:text-secondary-light`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a href={`/#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// Intended behavior:
// When scrolling down, if you are more than 100px from the top of the page,
// the navbar should be hidden.  When scrolling up, the navbar should be shown.

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  let prevScrollTop = 0;  // window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > prevScrollTop && scrollTop > 100) {
        // if scrolling down and we are down >100px from the top,
        // hide the Navbar
        setScrolled(true);
      } else if (prevScrollTop - scrollTop > 10) {
        // if scrolling up, and moved enough, show Navbar
        setScrolled(false);
      }
      prevScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        // scrolled ? "hidden" : "bg-primary-dark"  // "bg-transparent"
        // "bg-transparent"  // ignore scrolled for now
        // "bg-primary-dark"  // ignore scrolled for now
        scrolled ? "hidden" : "bg-primary-dark"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <FullMenu />
        <CompressedMenu />
        <NameLogo />
      </div>
    </nav>
  );

};

export default Navbar;