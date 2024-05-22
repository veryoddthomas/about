import React from "react";

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig)
const colors = fullConfig.theme.colors;

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { PageSection } from ".";
import { textVariant } from "../utils/motion";
import Image from "next/image";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    // set 'visible to work around
    // https://github.com/stephane-monnot/react-vertical-timeline/issues/166
    visible= {true}
    contentStyle={{
        background: colors.secondary.dark,
        color: "#fff",
        // border: "1px solid #fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >

      <div>
        <h3 className='text-primary-light text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary-light text-[16px] font-semibold m-0' >
          {experience.company_name}
        </p>
      </div>

      {experience.detailed_points != null ?

        <div className="group perspective" >
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000" >
            <div className="relative backface-hidden group-hover:hidden " >
              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li
                    key={`xp-${index}`}
                    className='text-primary-light text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {experience.languages != null ?
                <div className='gap-y-0 mt-4 flex flex-wrap gap-2'>
                  {experience.languages.map((language, index) => (
                    <div
                      key={`lang-${index}`}
                      className={`text-[14px] text-tertiary-light`}
                    >
                      {language}
                      </div>
                  ))}
                </div>
                :
                null}
            </div>

            <div className="relative group-not-hover my-rotate-y-180 backface-hidden overflow-hidden" >
              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.detailed_points.map((point, index) => (
                  <li
                    key={`dxp-${index}`}
                    className='text-primary-light text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>
              {experience.languages != null ?
                <div className='mt-4 flex flex-wrap gap-2'>
                  {experience.languages.map((language, index) => (
                    <div
                      key={`lang-${index}`}
                      className={'`text-[14px] text-tertiary-light'}
                    >
                      {language}
                    </div>
                  ))}
                </div>
                :
                null}
            </div>
          </div>
        </div>
        :
        <div>
          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li
                key={`xp-${index}`}
                className='text-primary-light text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
          {experience.languages != null ?
                <div className='mt-4 flex flex-wrap gap-2'>
                  {experience.languages.map((language, index) => (
                    <div
                      key={`lang-${index}`}
                      className={'`text-[14px] text-tertiary-light'}
                    >
                      {language}
                    </div>
                  ))}
                </div>
                :
                null}
        </div>
      }

    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Oh, the places I have worked...
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default PageSection(Experience, "work");
