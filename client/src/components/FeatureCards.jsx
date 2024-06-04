import React from "react";
import { useNavigate } from "react-router-dom";
// import resumeIcons from "../assets/resume.webp";

const FeatureCards = ({ index, img, head, para, btnText }) => {
  const navigate = useNavigate();
  return (
    <>
      <img
        src={img}
        className="text-theme-red w-24 translate-y-0 group-hover/card:translate-y-[-1rem] transition-all duration-500"
        alt="icon"
      />
      <h1 className="text-2xl font-bold mt-3">{head}</h1>
      <p className="mt-3 ">{para}</p>
      <button
        onClick={() => navigate("/login")}
        className="text-theme-red font-bold p-3 mt-3 border border-theme-red rounded-lg w-60 group-hover/card:bg-theme-red group-hover/card:text-white transition-all duration-500"
      >
        {btnText}
      </button>
    </>
  );
};

export default FeatureCards;
