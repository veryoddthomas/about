import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, textVariant } from "../utils/motion";
import { AnimatedSection } from ".";
import { IconCard } from ".";

import { chromium, firmware, lock, mobile, os, c, cpp, python, lua, rust, mojo, code } from "../assets";

const domains = [
  { title: "Operating Systems", icon: os, },
  { title: "Mobile Platforms", icon: mobile, },
  { title: "Web Technologies", icon: chromium, },
  { title: "Firmware", icon: firmware, },
  { title: "Software Security", icon: lock, },  // shield
];

import { languages } from "../data/languages";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className='pre-h1'>Introduction</h1>
        <h1>Overview</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-primary-light text-[18px] max-w-3xl leading-[30px]'
      >
        I have written firmware, device drivers, graphics
        software, multimedia codecs, communication protocols,
        test frameworks, DRM software, and many, many applications.

        <br />
        <br />

        I have also contributed to
        operating-system kernels, a web-rendering engine, SDKs, DDKs.

        Most of the software I have worked on was proprietary IP of my employer at the time, other
        than WebKit and the Chromium Browser for Snapdragon.  But I have plans
        to build up my open-source portfolio.
      </motion.p>

      <h2>Domains</h2>

      <div className='mt-10 flex flex-wrap gap-10'>
        {domains.map((domain, index) => (
          <IconCard key={domain.title} index={index} {...domain} />
        ))}
      </div>

      <a href='languages'><h2 className='link'>Programming Languages</h2></a>

      <div className='mt-10 flex flex-wrap gap-10'>
        {languages.map((language, index) => (
          <IconCard key={language.title} index={index} url={'languages/#' + language.id} {...language} />
        ))}
      </div>
    </>
  );
};

export default AnimatedSection(About, "about");
