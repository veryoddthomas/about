import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, textVariant } from "../utils/motion";
import { AnimatedSection } from ".";
import { IconCard } from ".";

import { domains } from "../data/domains";
import { languages } from "../data/languages";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className='pre-h1'>Introduction</h1>
        <h1>Overview</h1>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-primary lg:text-[20px] text-[18px] max-w-3xl leading-[30px]'
      >
        <p>
          Throughout my career, I have worked on firmware, display drivers,
          streaming media drivers, DMA drivers, graphics software, multimedia
          codecs, parsers, communication protocols, test frameworks,
          profilers, DRM software, console applications on Windows and Linux,
          web applications, a web rendering engine, and a trusted execution
          environment (TEE).
        </p>

        <p>
          I have contributed code to Microsoft Windows, Qualcomm BREW,
          Qualcomm's Android and Embedded Linux releases for Snapdragon,
          WebKit, SDKs, and DDKs.
        </p>

        <p>
          While most of the software I have worked on has been proprietary
          to my employers, I have also contributed to the WebKit and the
          Chromium Browser for Snapdragon projects. I'm planning to expand
          my open-source contributions soon.
        </p>
      </motion.div>

      <h2 className='link mt-16'><a href='domains'>Domains</a></h2>

      <div className='mt-10 flex flex-wrap gap-4'>
        {domains.map((domain, index) => (
          <IconCard key={domain.title} index={index} {...domain} />
        ))}
      </div>

      <h2 className='link mt-16'><a href='languages'>Programming Languages</a></h2>

      <div className='mt-10 flex flex-wrap gap-4'>
        {languages.map((language, index) => (
          <IconCard key={language.title} index={index} url={'languages/#' + language.id} {...language} />
        ))}
      </div>
    </>
  );
};

export default AnimatedSection(About, "about");
