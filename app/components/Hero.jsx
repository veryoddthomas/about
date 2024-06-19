import { motion } from "framer-motion";

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
          <div className='font-medium text-primary-light lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-6'>
            <p className='mt-6'>
              My name is <span className='text-secondary-light font-bold'>Tom Zakrajsek</span>.
            </p>
            <p className='mt-6'>
              I&apos;m a recovering Technical Director and avid coder with a passion for
              clean code and test coverage.
            </p>
            <p className='mt-6'>
              I focus on comprehensibility, functionality, security, performance, and
              resource efficiency, basically in that order.
            </p>
            <p className='mt-6'>
              I have worked for both Microsoft and Qualcomm, as well as a couple of other companies.
            </p>
          </div>
        </div>
      </div>

      {/* <EarthCanvas /> */}
      {/* <CrabCanvas /> */}
      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center'>
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
