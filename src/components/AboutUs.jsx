import React from "react";
import LOGO from "../images/KRAKEN.png";
import ARROW_DOWN from "../icons/double_arrow_down.svg";
import CURVE from "../images/curve_2.png";

const AboutUs = () => {
  return (
    <div className="radial2 w-full">
      <div className="flex justify-between items-center px-6 lg:px-[9.9375rem]">
        <img src={LOGO} alt="LOGO" className="w-16 lg:w-[120px] lg:h-[169px]" />
        <p className="text-2xl lg:text-[2.5rem] font-normal text-primary font-vcr underline">
          About Us
        </p>
      </div>
      <div className="flex flex-col items-center px-6 lg:px-[9.9375rem]">
        <p className="font-spacegrotesk font-normal text-xl lg:text-[2rem] leading-[3.25rem] text-white text-center mt-[6.125rem]">
          Started as a one-man team,{" "}
          <span className="text-primary">KrakenStudios</span> have grown into a
          group of people with different skill sets and expertise, that is sure
          to cater most of your web3 needs. Each team member is an expert to
          their own field, ranging from 5-10 years of experience respectively.
          We aim to help each project on a professional, and personal level to
          ensure the quality, experience, and the trust that we build is one to
          be remembered.
        </p>
        <button className="mt-[6.9375rem]">
          <img src={ARROW_DOWN} alt="ARROW_DOWN" />
        </button>
      </div>
      <img src={CURVE} alt="CURVE" className="w-full mt-[3.6rem]" />
    </div>
  );
};

export default AboutUs;
