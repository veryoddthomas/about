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

import { experiences } from "../data/experiences";
import { AnimatedSection } from ".";
import { textVariant } from "../utils/motion";
import Image from "next/image";


const LanguageTags = ({ experience }) => {
  return (
    <div>
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
  )
}

const SummaryContents = ({ experience }) => {
  return (
    <div>
      {/* <h2>Summary Here</h2> */}
    </div>
  )
}

const SimpleContents = ({ experience }) => {
  return (
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
    </div>
  )
}

const DetailedContents = ({ experience }) => {
  return (
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
        </div>

        <div className="relative group-not-hover my-rotate-y-180 backface-hidden overflow-hidden" >

          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-secondary-light font-bold opacity-50 z-0 -rotate-45 scale-[5] lg:scale-[8]">TL;DR</p>
          </div>
          {/* <h3 className='text-primary-light text-md italic mt-1' >TL;DR</h3> */}

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
        </div>
      </div>
    </div>
  )
}

const ExperienceCard = ({ experience }) => {
  const summary = true;
  return (
    <VerticalTimelineElement
      // set 'visible to work around
      // https://github.com/stephane-monnot/react-vertical-timeline/issues/166
      visible={true}
      contentStyle={{
        background: 'black', // '#123',  // '#0C1824',  // colors.secondary.dark,
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "12px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}  //#232631
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full' >
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div >
      }
    >
      <div>
        <h3 className='text-primary-light text-[24px] font-bold'>{experience.company_name}</h3>
        <h3 className='text-secondary-light text-lg font-bold mt-1' >
          {experience.title}
        </h3>
      </div>

      {
        summary ?
          <SummaryContents experience={experience} />
          :
          experience.detailed_points != null ?
            <DetailedContents experience={experience} />
            :
            <SimpleContents experience={experience} />
      }

      {summary || <LanguageTags experience={experience} />}

    </VerticalTimelineElement >
  );
};

const CompanyCard = (experiences) => {
  return (
    <VerticalTimelineElement
      // set 'visible to work around
      // https://github.com/stephane-monnot/react-vertical-timeline/issues/166
      visible={true}
      contentStyle={{
        background: 'blue', // '#123',  // '#0C1824',  // colors.secondary.dark,
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "12px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}  //#232631
      date={experiences[0].date}
      iconStyle={{ background: experiences[0].iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full' >
          <Image
            src={experiences[0].icon}
            alt={experiences[0].company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div >
      }
    >
      <div>
        <h3 className='text-primary-light text-[24px] font-bold'>{experiences[0].company_name}</h3>

        <h3 className='text-secondary-light text-lg font-bold mt-1' >
          {experience.title} (and more?)
        </h3>
      </div>

      {
        summary ?
          <SummaryContents experience={experience} />
          :
          experience.detailed_points != null ?
            <DetailedContents experience={experience} />
            :
            <SimpleContents experience={experience} />
      }

      {summary || <LanguageTags experience={experience} />}

    </VerticalTimelineElement >
  );
};

const Experience = () => {
  const experiencesGroupedByCompany = experiences.reduce((acc, curr) => {
    if (!acc[curr.company_name]) {
      acc[curr.company_name] = [];
    }
    acc[curr.company_name].push(curr);

    return acc;
  }, {});

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={'pre-h1 text-center'}>Career</h1>
        <h1 className={'text-center'}>Work Experience</h1>
      </motion.div>

      <div className='mt-8 lg:mt-16 flex flex-col'>
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

export default AnimatedSection(Experience, "work");
