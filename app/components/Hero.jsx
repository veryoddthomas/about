import { motion } from "framer-motion";
import StringCycler from './StringCycler';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={'page-setup'}>
        <div>
          <h1 className='title-size'> Welcome! </h1>
          <div className='font-medium text-primary text-xl lg:text-3xl mt-6'>
            <div className="flex gap-6 mt-8 lg:mt-16 mt-">
              <span>My name is <span className='emphasized-2'>Tom Zakrajsek</span>. </span>
            </div>

            <p className='mt-6'>
              I&apos;m a
              &nbsp;<span className='emphasized-1'>software engineer</span>&nbsp; and
              &nbsp;<span className='emphasized-1'>technical leader</span>&nbsp;
              with a passion for software craftsmanship and developing strong teams.
            </p>

            {/* <p className='mt-6'>
              I have worked for
              &nbsp;<span className='emphasized-1'>Microsoft</span>&nbsp; and
              &nbsp;<span className='emphasized-1'>Qualcomm</span>&nbsp;
              as well as Conexant, Valhalla Scientific, and the DOD.
            </p> */}

            <p className='mt-6'>
              At the moment, I'm probably thinking about:&nbsp;
              <span className='emphasized-3'>
                <StringCycler
                  interval={2500}
                  strings={([
                    "clean code",
                    "unit testing",  // "test-driven developement",
                    "rust (programming language)",
                    "model training",
                    "supply chain security",
                    "github actions",
                    "cloud services and architecture",
                    "mojo 🔥 (programming language)",
                    "code optimization",
                  ])}
                />
              </span>
              .
            </p>

            {/*
            <p className='mt-6'>
              If I'm thinking about non-technical stuff, I'm probably thinking about&nbsp;
              <span className='emphasized-3'>
                <StringCycler
                  interval={2500}
                  strings={([
                    "disc golf",
                    "beer",
                    "the next vacation",
                    "whiskey",
                    "working out",
                  ])}
                />

              </span>
              .
            </p>
            */}

          </div>
        </div>
      </div>




      <div className='absolute bottom-24 w-full flex justify-center items-center'>
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
      </div>

    </section>
  );
};

export default Hero;
