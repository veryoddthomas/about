import { motion } from "framer-motion";
import { styles } from "../styles";
// import { CrabCanvas, ComputersCanvas, EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto  ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={styles.heroHeadText}>
            Welcome!
          </h1>
          <br/>
          {/* <hr/>  */}
          <br/>
          <p className={`${styles.heroSubText}`}>
            My name is <span className='text-secondary-light font-bold'>Tom Zakrajsek</span>.
          </p>
          <p className={`${styles.heroSubText}`}>
            I&apos;m a former Technical
            Director, and avid coder with an insatiable curiosity about
            emerging technologies.
          </p>
          <p className={`${styles.heroSubText}`}>
            I am an alumnus of both Microsoft and Qualcomm.
          </p>

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
