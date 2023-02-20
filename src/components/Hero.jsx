import React from "react";
import LOGO from "../images/KRAKEN.png";
import ARROW_DOWN from "../icons/double_arrow_down.svg";
import CURVE from "../images/curve_1.png";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInToUp = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
        delay: 0.25,
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <motion.div
        className="flex items-center mt-16 lg:mt-[11.1875rem]"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
      >
        <img src={LOGO} alt="LOGO" className="w-16 mr-6 lg:w-full" />
        <p className="text-2xl font-normal text-white lg:text-7xl font-vcr">
          <span className="text-primary">Kraken</span>Studios
        </p>
      </motion.div>
      <motion.p
        className="mt-[3.75rem] font-spacegrotesk text-2xl lg:text-5xl text-white text-center"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
      >
        Your Web3 Creative and Marketing Assistance
      </motion.p>
      <motion.button
        className="mt-[5.06rem] pb-[3.6rem]"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
      >
        <img src={ARROW_DOWN} alt="ARROW_DOWN" />
      </motion.button>
      <motion.img
        src={CURVE}
        alt="CURVE"
        className="w-full"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
      />
    </div>
  );
};

export default Hero;
