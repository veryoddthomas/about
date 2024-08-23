import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const AnimatedSection = (Component, idName) =>
  // This takes a component in, and creates a higher-order component
  // that wraps it in a motion section for animation.
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.1 }}
        className={'sm:px-16 px-6 sm:py-12 py-6 max-w-7xl mx-auto relative z-0'}
      >
        <span className='' id={idName}>
          <Component />
        </span>
      </motion.section>
    );
  };

export default AnimatedSection;
