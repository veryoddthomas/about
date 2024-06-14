import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, textVariant } from "../utils/motion";
import { PageSection } from ".";

import { chromium, firmware, lock, mobile, os, c, cpp, python, lua, rust, mojo, code } from "../assets";

const domains = [
  { title: "Operating Systems", icon: os, },
  { title: "Mobile Platforms", icon: mobile, },
  { title: "Web Technologies", icon: chromium, },
  { title: "Firmware", icon: firmware, },
  { title: "Software Security", icon: lock, },  // shield
];

const languages = [
  { title: "C", icon: c, },
  { title: "C++", icon: cpp, },
  { title: "Rust", icon: rust, },
  { title: "Python", icon: python, },
  { title: "Lua", icon: lua, },
  { title: "Mojo", icon: mojo, },
  { title: "Other", icon: code, },
];

const DomainCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.15, 0.50)}
    className='xs:w-[250px] w-full bg-primary-dark p-[1px] rounded-[20px] shadow-card'
  >
    <div
      className='group rounded-[20px] border border-primary-light px-5 py-4  hover:border-primary-light hover:bg-secondary-dark flex justify-evenly items-center flex-col'
    >
      <Image
        src={icon}
        alt={title}
        className='w-24 h-24 object-contain'
      />

      <br />
      <h3 className='text-primary-light text-[20px] text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
);

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
        software, multimedia codecs, communication protocols, test frameworks, DRM software (I&apos;m sorry), and many, many applications.

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
          <DomainCard key={domain.title} index={index} {...domain} />
        ))}
      </div>

      <h2>Programming Languages</h2>

      <div className='mt-10 flex flex-wrap gap-10'>
        {languages.map((language, index) => (
          <DomainCard key={language.title} index={index} {...language} />
        ))}
      </div>
    </>
  );
};

export default PageSection(About, "about");
