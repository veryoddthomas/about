import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { AnimatedSection } from ".";
import { IconCard } from ".";
import { languages } from "../data/languages";

const AboutLanguages = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className='pre-h1'>Proficiencies</h1>
        <h1>Programming Languages</h1>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-primary lg:text-[20px] text-[18px] leading-[30px]'
      // max-w-3xl
      >

        {/* <h2 className='link mt-16'><a href='languages'>Programming Languages</a></h2> */}

        <div className='mt-10 flex flex-wrap gap-2 max-w-[800px]'>
          {languages.map((language, index) => (
            <IconCard key={language.title} index={index} url={'languages/#' + language.id} {...language} />
          ))}
        </div>
      </motion.div>

    </>
  );
};

export default AnimatedSection(AboutLanguages, "languages");
