import { motion } from "framer-motion";
import StringCycler from './StringCycler';

const Welcome = () => {
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

            <p className='mt-6'>
              At the moment, I'm probably thinking about:&nbsp;
              <span className='emphasized-1'>
                <StringCycler
                  interval={1500}
                  strings={([
                    "clean code",
                    "unit testing and code coverage",  // "test-driven developement",
                    "Rust",
                    "model training",
                    "supply chain security",
                    "Github actions",
                    "cloud services and architecture",
                    "Mojo 🔥",
                    "code optimization",
                  ])}
                />
              </span>
              .
            </p>
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

export default Welcome;
