import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import Modal from "./Modal";
import { imgsNFT } from "../constants";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";

import LOGO from "../images/KRAKEN.png";
import CURVE from "../images/curve_4.png";

import ARROW_LEFT from "../icons/arrow_left.svg";
import ARROW_RIGHT from "../icons/arrow_right.svg";

const NFT = () => {
  var mySpaceBetween;
  var mySlidesPerView;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  if (windowWidth <= 640) {
    // small
    mySpaceBetween = 100;
    mySlidesPerView = 2;
  } else if (windowWidth <= 768) {
    // medium
    mySpaceBetween = 100;
    mySlidesPerView = 2;
  } else if (windowWidth >= 769) {
    // large and above
    mySpaceBetween = 200;
    mySlidesPerView = 3;
  }

  const [showModal, setShowModal] = useState(false);
  const [showImg, setShowImg] = useState("");
  const closeModal = () => {
    setShowModal(false);
  };

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
    <div className="w-full">
      <motion.div
        className="flex justify-between items-center px-6 lg:px-[9.9375rem] mt-20 mb-[3.38rem]"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
      >
        <img src={LOGO} alt="LOGO" className="w-16 lg:w-[120px] lg:h-[169px]" />
        <p className="text-base lg:text-[2.5rem] font-normal text-primary font-vcr underline">
          NON FUNGIBLE TOKENS (NFT)
        </p>
      </motion.div>
      <motion.div variants={fadeInToUp} initial="hidden" whileInView="visible">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          spaceBetween={mySpaceBetween}
          slidesPerView={mySlidesPerView}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{
            type: "fraction",
          }}
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="swiper"
        >
          {imgsNFT.map((imgSrc, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div
                id="nft-tooltip"
                data-tooltip-html={ReactDOMServer.renderToString(
                  <div>
                    I am <b>JSX</b> content
                  </div>
                )}
                className="bg-sliderItem border-[12px] border-white rounded-[40px] lg:rounded-[72px] p-4 lg:p-7 flex items-center justify-center shadow-nftShadow"
                onClick={() => {
                  setShowImg(imgSrc.src);
                  setShowModal(true);
                }}
              >
                <img
                  src={imgSrc.src}
                  alt={imgSrc.alt}
                  className="cursor-pointer"
                />
              </div>
              <ReactTooltip
                anchorId="nft-tooltip"
                // place="bottom"
                // variant="info"
                // content="Click to view image in full resolution."
              />
            </SwiperSlide>
          ))}
          <div className="flex justify-center slider-controler mt-8 pb-[6px] gap-[9rem] relative z-20">
            <div className="cursor-pointer arrow-left">
              <img src={ARROW_LEFT} alt="ARROW_LEFT" />
            </div>
            <div className="cursor-pointer arrow-right">
              <img src={ARROW_RIGHT} alt="ARROW_RIGHT" />
            </div>
          </div>
        </Swiper>
      </motion.div>
      <motion.img
        src={CURVE}
        alt="CURVE"
        className="w-full mt-[3.38rem]"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
      />
      <Modal visible={showModal} onClose={closeModal} src={showImg} />
    </div>
  );
};

export default NFT;
