import React from "react";
import LOGO from "../images/KRAKEN.png";
import CURVE from "../images/curve_3.png";
import RECT_NFT from "../images/rect_nft.png";
import RECT_WEBUI from "../images/rect_webUI.png";
import RECT_MARKETING from "../images/rect_marketing.png";
import RECT_BRANDING from "../images/rect_branding.png";
import RECT_COMMUNITY from "../images/rect_community.png";
import { motion } from "framer-motion";

const Services = () => {
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
    <div className="relative w-full">
      <motion.div
        className="flex justify-between items-center px-6 lg:px-[9.9375rem] mt-20"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
      >
        <img src={LOGO} alt="LOGO" className="w-16 lg:w-[120px] lg:h-[169px]" />
        <p className="text-2xl lg:text-[2.5rem] font-normal text-primary font-vcr underline">
          Services Offered
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col items-center px-6 lg:px-[9.9375rem]"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
      >
        <p className="font-causten font-normal text-xl lg:text-2xl text-secondary text-center mt-[2.5625rem]">
          Services we offer are professionally made, and tailored to your
          specific requirements and needs. We ensure that the quality and
          satisfaction you will get are top notched, and delivered in a timely
          manner.
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-6 px-6 lg:px-[9.9375rem] mt-10 pb-[3.6rem]">
        <motion.div
          className="relative drop-shadow-filterMain rounded-[2.25rem] mx-6 lg:mx-0"
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={RECT_NFT}
            alt="RECT_NFT"
            className="w-full h-[28rem] lg:w-[16.375rem] lg:h-[24rem]"
          />
          <div className="absolute bottom-0 flex items-center justify-center w-full h-32 bg-secondary rounded-2xl shadow-shadowMain">
            <span className="text-4xl text-white font-vcr">NFTs</span>
          </div>
        </motion.div>
        <motion.div
          className="relative drop-shadow-filterMain rounded-[2.25rem] mx-6 lg:mx-0"
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={RECT_WEBUI}
            alt="RECT_WEBUI"
            className="w-full h-[28rem] lg:w-[16.375rem] lg:h-[24rem]"
          />
          <div className="absolute bottom-0 flex items-center justify-center w-full h-32 bg-secondary rounded-2xl shadow-shadowMain">
            <span className="text-4xl text-white font-vcr">Web UI</span>
          </div>
        </motion.div>
        <motion.div
          className="relative drop-shadow-filterMain rounded-[2.25rem] mx-6 lg:mx-0"
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={RECT_MARKETING}
            alt="RECT_MARKETING"
            className="w-full h-[28rem] lg:w-[16.375rem] lg:h-[24rem]"
          />
          <div className="absolute bottom-0 flex items-center justify-center w-full h-32 bg-secondary rounded-2xl shadow-shadowMain">
            <span className="text-4xl text-center text-white font-vcr">
              Digital Marketing
            </span>
          </div>
        </motion.div>
        <motion.div
          className="relative drop-shadow-filterMain rounded-[2.25rem] mx-6 lg:mx-0"
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={RECT_BRANDING}
            alt="RECT_BRANDING"
            className="w-full h-[28rem] lg:w-[16.375rem] lg:h-[24rem]"
          />
          <div className="absolute bottom-0 flex items-center justify-center w-full h-32 bg-secondary rounded-2xl shadow-shadowMain">
            <span className="text-4xl text-white font-vcr">Branding</span>
          </div>
        </motion.div>
        <motion.div
          className="relative drop-shadow-filterMain rounded-[2.25rem] mx-6 lg:mx-0"
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={RECT_COMMUNITY}
            alt="RECT_COMMUNITY"
            className="w-full h-[28rem] lg:w-[16.375rem] lg:h-[24rem]"
          />
          <div className="absolute bottom-0 flex items-center justify-center w-full h-32 bg-secondary rounded-2xl shadow-shadowMain">
            <span className="text-4xl text-center text-white font-vcr">
              Community Building
            </span>
          </div>
        </motion.div>
      </div>
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

export default Services;
