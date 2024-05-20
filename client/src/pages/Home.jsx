import React from "react";

// Import Component
import Navbar from "../components/Navbar";

// Import Images
import BannerWaves from "../assets/banner-bg.png";
import BannerParticle01 from "../assets/banner-particle-01.png";
import BannerParticle02 from "../assets/banner-particle-02.png";
import BannerParticle03 from "../assets/banner-particle-03.png";

const Home = () => {
  return (
    <div className="w-full relative">
      <Navbar />

      <div className="bannerCont relative w-full min-h-dvh">
        <img
          src={BannerWaves}
          alt="banner-waves"
          className="absolute top-[50%] left-[15rem] w-[5rem]"
        />
        <img src={BannerParticle01} alt="Particle-01" />
        <img
          src={BannerParticle02}
          alt="Particle-02"
          className="absolute top-[60%] left-[2rem] w-[5.5rem]"
        />
        <img
          src={BannerParticle03}
          alt="Particle-03"
          className="absolute top-[22%] left-[12%] w-[2.5rem]"
        />
        <div className="bannerWrapper mx-[3%]"></div>
      </div>
    </div>
  );
};

export default Home;
