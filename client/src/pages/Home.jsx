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
          className="absolute bottom-0 right-0 w-[90rem]"
        />
        <img
          src={BannerParticle01}
          alt="Particle-01"
          className="absolute top-[40%] left-[1.5%] w-[6rem]"
        />
        <img
          src={BannerParticle02}
          alt="Particle-02"
          className="absolute top-[65%] left-[1.5%] w-[5.5rem]"
        />
        <img
          src={BannerParticle03}
          alt="Particle-03"
          className="absolute top-[20%] left-[12%] w-[2.2rem]"
        />
        <div className="bannerWrapper mx-[3%]"></div>
      </div>
    </div>
  );
};

export default Home;
