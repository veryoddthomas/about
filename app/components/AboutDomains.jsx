import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, textVariant } from "../utils/motion";
import { AnimatedSection } from ".";
import { IconCard } from ".";

import { domains } from "../data/domains";
import { languages } from "../data/languages";

const AboutDomains = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className='pre-h1'>Technology</h1>
        <h1>Domains</h1>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-primary lg:text-[20px] text-[18px] leading-[30px]'
      // max-w-3xl
      >

        {/* <h2 className='link mt-16'><a href='domains'>Domains</a></h2> */}

        <div className='mt-10 flex flex-wrap gap-2 max-w-[800px]'>
          {domains.map((domain, index) => (
            <IconCard key={domain.title} index={index} url={'domains/#' + domain.id} {...domain} />
          ))}
        </div>

      </motion.div>

    </>
  );
};

export default AnimatedSection(AboutDomains, "about-domains");
