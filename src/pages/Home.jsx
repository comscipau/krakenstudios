import React from "react";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import NFT from "../components/NFT";
import Services from "../components/Services";
import WebUI from "../components/WebUI";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <NFT />
      <WebUI />
    </>
  );
};

export default Home;
