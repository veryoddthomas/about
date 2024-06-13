"use client";

import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";


const navLinks = [
  { id: "", title: "Home", },
  { id: "about", title: "About", },
  { id: "work", title: "Work", },
  { id: "contact", title: "Contact Me", },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
        // scrolled ? "bg-primary" : "bg-primary-dark"
        // scrolled ? "hidden" : "bg-transparent"
        // "bg-transparent"  // ignore scrolled for now
        "bg-primary-dark"  // ignore scrolled for now
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-primary-light hover:text-secondary-light text-[18px] font-bold cursor-pointer flex '>
            Tom Zakrajsek&nbsp;
            <span className='sm:block hidden'> &mdash; Software Engineer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={'text-primary-light hover:text-secondary-light text-[18px] font-medium cursor-pointer'}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/* <li
              key={'login-button'}
              className={` text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Button />
            </li> */}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-primary-dark absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
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
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );

};

export default Navbar;