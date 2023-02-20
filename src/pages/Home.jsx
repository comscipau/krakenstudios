import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import NFT from "../components/NFT";
import Services from "../components/Services";
import WebUI from "../components/WebUI";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
// import CURVE1 from "../images/curve_1.png";
// import CURVE2 from "../images/curve_2.png";
// import CURVE3 from "../images/curve_3.png";
// import CURVE4 from "../images/curve_4.png";
// import CURVE5 from "../images/curve_5.png";

const Home = () => {
  const [heroSec, inViewHero] = useInView({
    threshold: 0.2,
  });
  const [aboutUsSec, inViewAboutUs] = useInView({
    threshold: 0.2,
  });
  const [servicesSec, inViewServices] = useInView({
    threshold: 0.2,
  });
  const [NFTsec, inViewNFT] = useInView({
    threshold: 0.2,
  });
  const [WebUIsec, inViewWebUI] = useInView({
    threshold: 0.2,
  });

  const bgAnimation = useAnimation();
  // const curveAnimation = useAnimation();

  useEffect(() => {
    if (inViewHero) {
      bgAnimation.start({
        background:
          "radial-gradient(190.89% 113.03% at 51.85% 5.24%, #ffc88a 0%, #ff8800 100%)",
        backgroundAttachment: "fixed",
        transition: {
          duration: 0.2,
        },
      });
      // curveAnimation.start({
      //   backgroundImage: `url(${CURVE1})`,
      //   transition: {
      //     duration: 5,
      //     ease: "easeInOut",
      //   },
      // });
    }
    if (inViewAboutUs) {
      bgAnimation.start({
        background:
          "radial-gradient(433% 174.49% at 52.08% 15.76%, #add4ff 0%, #004694 81.1%)",
        backgroundAttachment: "fixed",
        transition: {
          duration: 0.2,
        },
      });
      // curveAnimation.start({
      //   backgroundImage: `url(${CURVE2})`,
      //   transition: {
      //     duration: 5,
      //     ease: "easeInOut",
      //   },
      // });
    }
    if (inViewServices) {
      bgAnimation.start({
        background:
          "radial-gradient(190.89% 113.03% at 51.85% 5.24%, #fff3e4 0%, #ffc88a 100%)",
        backgroundAttachment: "fixed",
        transition: {
          duration: 0.2,
        },
      });
      // curveAnimation.start({
      //   backgroundImage: `url(${CURVE3})`,
      //   transition: {
      //     duration: 0.2,
      //   },
      // });
    }
    if (inViewNFT) {
      bgAnimation.start({
        background:
          "radial-gradient(154.98% 91.76% at 51.85% 26.5%, #add4ff 0%, #ffffff 100%)",
        backgroundAttachment: "fixed",
        transition: {
          duration: 0.2,
        },
      });
      // curveAnimation.start({
      //   backgroundImage: `url(${CURVE4})`,
      //   transition: {
      //     duration: 0.2,
      //   },
      // });
    }
    if (inViewWebUI) {
      bgAnimation.start({
        background:
          "radial-gradient(154.98% 91.76% at 51.85% 26.5%, #ffc88a 0%, #ffedd8 100%)",
        backgroundAttachment: "fixed",
        transition: {
          duration: 0.2,
        },
      });
      // curveAnimation.start({
      //   backgroundImage: `url(${CURVE5})`,
      //   transition: {
      //     duration: 0.2,
      //   },
      // });
    }
  }, [inViewHero, inViewAboutUs, inViewServices, inViewNFT, inViewWebUI]);

  return (
    <motion.div animate={bgAnimation} className="relative">
      <div ref={heroSec}>
        <Hero />
      </div>
      <div ref={aboutUsSec}>
        <AboutUs />
      </div>
      <div ref={servicesSec}>
        <Services />
      </div>
      <div ref={NFTsec}>
        <NFT />
      </div>
      <div ref={WebUIsec}>
        <WebUI />
      </div>
      {/* <motion.div
        className="w-full fixed -bottom-28 z-50 h-[300px]"
        animate={curveAnimation}
      /> */}
    </motion.div>
  );
};

export default Home;
