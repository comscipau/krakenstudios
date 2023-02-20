import React, { useState, useEffect } from "react";
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

import slide_image_1 from "../images/web_1.png";
import slide_image_2 from "../images/web_2.png";
import slide_image_3 from "../images/web_3.png";

import LOGO from "../images/KRAKEN.png";
import CURVE from "../images/curve_5.png";

import ARROW_LEFT from "../icons/arrow_left.svg";
import ARROW_RIGHT from "../icons/arrow_right.svg";

const WebUI = () => {
  var mySpaceBetween;
  var mySlidesPerView = 2;
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
    mySpaceBetween = 40;
    // mySlidesPerView = 2;
  } else if (windowWidth <= 768) {
    // medium
    mySpaceBetween = 40;
    // mySlidesPerView = 2;
  } else if (windowWidth >= 769) {
    // large and above
    mySpaceBetween = 200;
    // mySlidesPerView = 2;
  }

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
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

  const fadeInToView = {
    hidden: {
      opacity: 0,
    },
    visible: {
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
        className="flex justify-between items-center px-6 lg:px-[9.9375rem] pt-20 mb-[3.38rem]"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
      >
        <img src={LOGO} alt="LOGO" className="w-16 lg:w-[120px] lg:h-[169px]" />
        <p className="text-xl lg:text-[2.5rem] font-normal text-primary font-vcr underline">
          WEBSITE UI DESIGNS
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
            nextEl: ".arrow-right2",
            prevEl: ".arrow-left2",
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <div className="p-0 lg:p-10">
              <img
                className="cursor-pointer"
                src={slide_image_1}
                alt="slide_image_1"
                onClick={() =>
                  openInNewTab("https://cryptok-lodgings.vercel.app/")
                }
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="p-0 lg:p-10">
              <img
                className="cursor-pointer"
                src={slide_image_2}
                alt="slide_image_2"
                onClick={() => openInNewTab("https://cmc-new.vercel.app/")}
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="p-0 lg:p-10">
              <img
                className="cursor-pointer"
                src={slide_image_3}
                alt="slide_image_3"
                onClick={() => openInNewTab("https://grypto.io/")}
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                className="cursor-pointer"
                src={slide_image_2}
                alt="slide_image_2"
                onClick={() => openInNewTab("https://cmc-new.vercel.app/")}
              ></img>
            </div>
          </SwiperSlide>
          <div className="flex justify-center slider-controler mt-8 pb-[6px] gap-[8rem] relative z-20">
            <div className="cursor-pointer arrow-left2">
              <img src={ARROW_LEFT} alt="ARROW_LEFT" />
            </div>
            <div className="cursor-pointer arrow-right2">
              <img src={ARROW_RIGHT} alt="ARROW_RIGHT" />
            </div>
          </div>
        </Swiper>
      </motion.div>
      <motion.img
        src={CURVE}
        alt="CURVE"
        className="w-full mt-[3.38rem]"
        variants={fadeInToView}
        initial="hidden"
        whileInView="visible"
      />
    </div>
  );
};

export default WebUI;
