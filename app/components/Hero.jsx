import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link'
import { github, linkedin } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={'page-setup'}>
        <div>
          <h1 className='lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
            Welcome!
          </h1>
          <br />
          {/* <hr/>  */}
          <br />
          <div className='font-medium text-primary lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-6'>
            <div className="flex gap-6 mt-16">

              <span>My name is <span className='emphasized-2'>Tom Zakrajsek</span>.</span>
              <div></div>
              <Link rel="noopener noreferrer" target="_blank" href={'https://github.com/veryoddthomas/'}>
                <Image className="" src={github} alt="My Github" width={40} height={40} />
              </Link>
              <Link rel="noopener noreferrer" target="_blank" href={'https://www.linkedin.com/in/tom-zakrajsek/'}>
                <Image src={linkedin} alt="My LinkedIn" width={40} height={40} />
              </Link>
            </div>
            <p className='mt-6'>
              I&apos;m a software engineer and technical leader with a passion
              for all aspects of software craftsmanship.
            </p>

            <p className='mt-6'>
              I have worked for both
              &nbsp;<span className='emphasized-2'>Microsoft</span>&nbsp; and
              &nbsp;<span className='emphasized-2'>Qualcomm</span>&nbsp;
              as well as a few smaller companies.
            </p>

            {/* <p className='mt-6'>
              &nbsp;<span className='emphasized-1'>Status:</span>&nbsp;
              &nbsp;<span className='font-mono border-2'>seeking-position</span>
            </p> */}
          </div>
        </div>
      </div>


      {/* <div className='absolute xs:bottom-16 bottom-24 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary-light flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 28, 0],
              }}
              transition={{
                ease: "linear",
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary-light mb-1'
            />
          </div>
        </a>
      </div> */}

    </section>
  );
};

export default Hero;
