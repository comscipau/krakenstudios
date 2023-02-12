import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";

import slide_image_1 from "../images/LOST_SOLS.png";
import slide_image_2 from "../images/SHARK.png";
import slide_image_3 from "../images/MYTHIC.png";
import slide_image_4 from "../images/SLATS.png";
import slide_image_5 from "../images/SUISIDESQUAD.png";
import slide_image_6 from "../images/SHARK.png";
import slide_image_7 from "../images/MYTHIC.png";
import LOGO from "../images/KRAKEN.png";
import CURVE from "../images/curve_4.png";

import ARROW_LEFT from "../icons/arrow_left.svg";
import ARROW_RIGHT from "../icons/arrow_right.svg";

const NFT = () => {
  return (
    <div className="w-full radial4 hidden lg:block">
      <div className="flex justify-between items-center px-6 lg:px-[9.9375rem] pt-20 mb-[3.38rem]">
        <img src={LOGO} alt="LOGO" className="w-16 lg:w-[120px] lg:h-[169px]" />
        <p className="text-2xl lg:text-[2.5rem] font-normal text-primary font-vcr underline">
          NON FUNGIBLE TOKENS (NFT)
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        // spaceBetween={100}
        spaceBetween={200}
        // slidesPerView={2}
        slidesPerView={3}
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
        <SwiperSlide className="swiper-slide">
          <div className="bg-sliderItem border-[12px] border-white rounded-[72px] p-4 lg:p-5 flex items-center justify-center shadow-nftShadow">
            <img src={slide_image_1} alt="slide_image_1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="bg-sliderItem border-[12px] border-white rounded-[72px] p-4 lg:p-5 flex items-center justify-center shadow-nftShadow">
            <img src={slide_image_2} alt="slide_image_2" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="bg-sliderItem border-[12px] border-white rounded-[72px] p-4 lg:p-5 flex items-center justify-center shadow-nftShadow">
            <img src={slide_image_3} alt="slide_image_3" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="bg-sliderItem border-[12px] border-white rounded-[72px] p-4 lg:p-5 flex items-center justify-center shadow-nftShadow">
            <img src={slide_image_4} alt="slide_image_4" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="bg-sliderItem border-[12px] border-white rounded-[72px] p-4 lg:p-5 flex items-center justify-center shadow-nftShadow">
            <img src={slide_image_5} alt="slide_image_5" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="bg-sliderItem border-[12px] border-white rounded-[72px] p-4 lg:p-5 flex items-center justify-center shadow-nftShadow">
            <img src={slide_image_6} alt="slide_image_6" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="bg-sliderItem border-[12px] border-white rounded-[72px] p-4 lg:p-5 flex items-center justify-center shadow-nftShadow">
            <img src={slide_image_7} alt="slide_image_7" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="bg-sliderItem border-[12px] border-white rounded-[72px] p-4 lg:p-5 flex items-center justify-center shadow-nftShadow">
            <img src={slide_image_5} alt="slide_image_5" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="bg-sliderItem border-[12px] border-white rounded-[72px] p-4 lg:p-5 flex items-center justify-center shadow-nftShadow">
            <img src={slide_image_6} alt="slide_image_6" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="bg-sliderItem border-[12px] border-white rounded-[72px] p-4 lg:p-5 flex items-center justify-center shadow-nftShadow">
            <img src={slide_image_7} alt="slide_image_7" />
          </div>
        </SwiperSlide>
        <div className="flex justify-center slider-controler mt-8 pb-[6px] gap-[8rem] relative z-20">
          <div className="cursor-pointer arrow-left">
            <img src={ARROW_LEFT} alt="ARROW_LEFT" />
          </div>
          <div className="cursor-pointer arrow-right">
            <img src={ARROW_RIGHT} alt="ARROW_RIGHT" />
          </div>
        </div>
      </Swiper>
      <img src={CURVE} alt="CURVE" className="w-full mt-[3.38rem]" />
    </div>
  );
};

export default NFT;
