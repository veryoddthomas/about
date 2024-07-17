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
        className='mt-4 text-primary text-xl leading-[30px]'
      // max-w-3xl
      >
        <p>
          Throughout my career, I have worked on embedded systems, display drivers,
          streaming media drivers, DMA drivers, graphics software, multimedia
          codecs, parsers, communication protocols, test frameworks,
          profilers, DRM software (CPRM), native applications on Windows and Linux,
          web services and applications, the WebKit rendering engine, and Qualcomm's
          trusted execution environment (QTEE).
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
    </>
  );
};

export default AnimatedSection(About, "about");
