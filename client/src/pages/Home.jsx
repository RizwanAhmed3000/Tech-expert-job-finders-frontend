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

      <div className="bannerCont relative z-0 w-full h-dvh px-[4%]">
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

        <div className="bannerWrapper relative z-[40] w-full h-full flex items-center justify-center">
          <div className="contentSide01 w-[50%] flex flex-col items-start justify-center">
            <h4 className="text-[1.6rem] leading-[1.6rem] font-medium">
              Welcome to TechexpertJobfinders
            </h4>

            <h1 className="text-[3.5rem] leading-[3.5rem] font-semibold text-theme-red">
              Create a <br /> compelling CV with <br /> AI assistance in <br />{" "}
              minutes.
            </h1>

            <h3>Online resume builder with AI assistance</h3>

            <p>
              Seamlessly create{" "}
              <span className="text-theme-red">
                an exceptional resume/CV with AI-powered features,
              </span>{" "}
              fine-tuning expert content to match your individuality.
            </p>

            <button className="bg-theme-red text-white px-[1rem] py-[0.6rem] rounded-md">
              Get Started
            </button>
          </div>
          <div className="contentSide02 w-[50%]"></div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
