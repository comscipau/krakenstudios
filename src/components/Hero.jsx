import React from "react";
import LOGO from "../images/KRAKEN.png";
import ARROW_DOWN from "../icons/double_arrow_down.svg";
import CURVE from "../images/curve_1.png";

const Hero = () => {
  return (
    <div>
      <div className="radial1 w-full flex flex-col justify-center items-center">
        <div className="flex items-center mt-16 lg:mt-[11.1875rem]">
          <img src={LOGO} alt="LOGO" className="mr-6 w-16 lg:w-full" />
          <p className="text-2xl lg:text-7xl font-normal text-white font-vcr">
            <span className="text-primary">Kraken</span>Studios
          </p>
        </div>
        <p className="mt-[3.75rem] font-spacegrotesk text-2xl lg:text-5xl text-white text-center">
          Your Web3 Creative and Marketing Assistance
        </p>
        <button className="mt-[5.06rem]">
          <img src={ARROW_DOWN} alt="ARROW_DOWN" />
        </button>
        <img src={CURVE} alt="CURVE" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
