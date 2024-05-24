import React, { useState } from "react";

// Import Icons
import { IoMdAdd } from "react-icons/io";
import { GiIciclesFence } from "react-icons/gi";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { HiMiniXMark } from "react-icons/hi2";
import ProfileForm from "./CreateResumeForms/ProfileForm";

const ResumeForm = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const getTabClassNames = (tabName) => {
    return activeTab === tabName ? "bg-red-500 text-white rounded-full" : "";
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="mainCont w-full h-full p-[3rem]">
      <div className="wrapper w-full h-full bg-white py-[1.5rem] px-[1.5rem] shadow-2xl rounded-2xl">
        {/* Create Resume Form Tabs */}
        <div className="tabCont flex items-center gap-[1.5rem] border-b-[0.2rem] border-neutral-200 py-[2rem] px-[1rem]">
          {/* Tabs */}
          <div className="flex items-center gap-[0.5rem]">
            {[
              "Profile",
              "Experience",
              "Education",
              "Skills",
              "Summary",
              "Interests",
              "Photo",
            ].map((tabname, index) => (
              <span
                key={index}
                className={`text-[1.6rem] leading-[1.6rem] px-6 py-4 cursor-pointer ${getTabClassNames(
                  tabname
                )} text-theme-red`}
                onClick={() => handleTabClick(tabname)}
              >
                {tabname}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-[1rem]">
            <button className="text-[1.7rem] leading-[1.7rem] px-[1.2rem] py-[1rem] flex items-center gap-[0.6rem] bg-theme-red text-white shadow-md rounded-md whitespace-nowrap">
              <IoMdAdd />
              <span>Add Section</span>
            </button>

            <button className="text-[1.7rem] leading-[1.7rem] px-[1.2rem] py-[1rem] flex items-center gap-[0.6rem] bg-theme-black text-white shadow-md rounded-md whitespace-nowrap">
              <GiIciclesFence />
              <span>Ask AI</span>
            </button>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="bottomCont flex flex-col gap-[2rem] p-[1.5rem]">
          {/* Tabs Info Cont */}
          <div className="w-full relative bg-theme-red px-[1.5rem] py-[1.5rem] flex items-start gap-[1.5rem] text-white rounded-md">
            <div className="iconCont text-[2rem]">
              <PiLightbulbFilamentBold />
            </div>

            <div className="textCont flex flex-col gap-[0.4rem] text-[1.5rem] leading-[1.7rem]">
              <span>What's the best way for Employers to contact you?</span>
              <span>We suggest including an email and phone number.</span>
            </div>

            <button className="absolute top-[1rem] right-[1.5rem] text-white text-[2rem]">
              <HiMiniXMark />
            </button>
          </div>

          {/* Create Resume Forms */}
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
