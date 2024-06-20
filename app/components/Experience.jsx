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
import { Chrono } from "react-chrono";

import { experiences } from "../constants";
import { AnimatedSection } from ".";
import { textVariant } from "../utils/motion";
import Image from "next/image";

// title: "Secure Systems Group",
// company_name: "Qualcomm Technologies, Inc.",
// icon: snapdragon,
// iconBg: "#112",
// date: "Oct 2017 - Dec 2023",
// points: [
//   "Developing and maintaining software in C++, C, Arm Assembly, Python, and Rust.",
//   "Participating in architecture, design, and code reviews, providing constructive feedback to the team.",
// ],
// detailed_points: [
//   "Led a global team of 30+ engineers responsible for end-to-end delivery of Qualcomm's TrustZone software. The team was highly execution focused, and process optimization and robustness were key to success through scalability.",
//   "Launched 20+ Snapdragon™ processors on Android, Windows, iOS, Embedded Linux, and Chrome OS.",
// ],
// languages: [
//   "rust", "c++",
// ],

// title: "May 1940",
// cardTitle: "Dunkirk",
// url: "http://www.history.com",
// cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
// cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",


const ChronoItem = (experience) => {
  // console.log(experience);
  let chrono_item = {};
  chrono_item.title = experience.date;  // "Title";
  chrono_item.cardTitle = experience.title;  // "cardTitle";
  chrono_item.url = "https://google.com";
  chrono_item.cardSubtitle = experience.company_name;  // "cardSubTitle";
  chrono_item.cardDetailedText = experience.points; // "cardDetailedText";  // undefined;
  // chrono_item.media = undefined;
  // chrono_item.date = undefined;
  // chrono_item.timelineContent = undefined;
  return chrono_item;
}

const ChronoIcon = (experience) => {
  // console.log(experience);
  let chrono_item = {};
  chrono_item.title = experience.date;  // "Title";
  chrono_item.cardTitle = experience.title;  // "cardTitle";
  chrono_item.url = "https://google.com";
  chrono_item.cardSubtitle = experience.company_name;  // "cardSubTitle";
  chrono_item.cardDetailedText = experience.points; // "cardDetailedText";  // undefined;
  return chrono_item;
}
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      // set 'visible to work around
      // https://github.com/stephane-monnot/react-vertical-timeline/issues/166
      visible={true}
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
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg"
      //   }
      // }
    },
    {
      title: "May 1941",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg"
      //   }
      // }
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={'pre-h1 text-center'}>
          Oh, the places I have worked...
        </h1>
        <h1 className={'text-center'}>
          Work Experience
        </h1>
      </motion.div>

      <div className='mt-20 flex flex-col'>

        <Chrono
          items={experiences.map((experience, index) => (ChronoItem(experience)))}
          // disableInteraction
          enableLayoutSwitch={false}
          enableQuickJump={false}
          disableToolbar
          toolbarPosition='BOTTOM'
          mode='VERTICAL_ALTERNATING'
          // mode='HORIZONTAL'
          theme={{
            primary: '#aaddff',
            secondary: 'black',
            cardBgColor: '#004466',
            titleColor: 'white',
            titleColorActive: 'orange',
          }}
        ></Chrono>

        {/* <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />

          ))}
        </VerticalTimeline> */}
      </div>
    </>
  );
};

export default AnimatedSection(Experience, "work");
