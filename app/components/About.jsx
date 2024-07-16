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
        className='mt-4 text-primary lg:text-[20px] text-[18px] leading-[30px]'
      // max-w-3xl
      >
        <p>
          Throughout my career, I have worked on embedded systems, display drivers,
          streaming media drivers, DMA drivers, graphics software, multimedia
          codecs, parsers, communication protocols, test frameworks,
          profilers, DRM software (CPRM), console applications on Windows and Linux,
          web applications, the WebKit rendering engine, and Qualcomm's trusted execution
          environment (QTEE).
        </p>

        <p>
          I have contributed code to Microsoft Windows, Qualcomm BREW,
          Qualcomm's Android and Embedded Linux releases for Snapdragon,
          WebKit, SDKs, and DDKs.
        </p>

        <p>
          While most of the software I have worked on has been proprietary
          intellectual property of my employer, I am looking forward to
          doing more work in open-source.
        </p>
      </motion.div>

      <h2 className='link mt-16'><a href='domains'>Domains</a></h2>

      <div className='mt-10 flex flex-wrap gap-2 max-w-[800px]'>
        {domains.map((domain, index) => (
          <IconCard key={domain.title} index={index} url={'domains/#' + domain.id} {...domain} />
        ))}
      </div>

      <h2 className='link mt-16'><a href='languages'>Programming Languages</a></h2>

      <div className='mt-10 flex flex-wrap gap-2 max-w-[800px]'>
        {languages.map((language, index) => (
          <IconCard key={language.title} index={index} url={'languages/#' + language.id} {...language} />
        ))}
      </div>
    </>
  );
};

export default AnimatedSection(About, "about");
