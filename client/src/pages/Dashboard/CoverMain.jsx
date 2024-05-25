import React, { useState } from "react";
import { FaFloppyDisk } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

function ToggleButtons() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="rounded-lg p-10 m-10 bg-white shadow-lg">
      {/* Header  */}
      <div>
        <span
          className={`text-2xl p-4 cursor-pointer rounded-full`}
          onClick={() => handleClick("coverLetter")}
          style={{
            backgroundColor:
              activeButton === "coverLetter" ? "#ec4843" : "transparent",
            color: activeButton === "coverLetter" ? "white" : "black",
          }}
        >
          Cover Letter
        </span>
        <span
          className={`text-2xl p-4 cursor-pointer rounded-full`}
          onClick={() => handleClick("photoLinks")}
          style={{
            backgroundColor:
              activeButton === "photoLinks" ? "#ec4843" : "transparent",
            color: activeButton === "photoLinks" ? "white" : "black",
          }}
        >
          Photo and Social Links
        </span>
      </div>
      <hr className="my-10" />
      {/* Body */}
      <div className="flex">
        {/* Left Container */}
        <div className="w-3/5">
          <div className="border borer-slate-300 p-12">
            <div className="flex justify-center mb-12">
              <span className="bg-theme-red text-white px-2 py-1">
                Add Recipient Information
              </span>
            </div>
            <div className="flex flex-col max-w-fit">
              <span className="bg-theme-red text-white px-2 py-1 my-3">
                Add Recipient
              </span>
              <span className="mt-4 text-lg ml-2 font-semibold">15/05/2024</span>
            </div>
            <div className="border border-slate-500 p-3 font-semibold">
              <h1 className="py-1">Dear [First Name] [Last Name],</h1>
              <p className="py-1">
                I am writing today in application to the [Target Job Title]
                position with [Target Company Name]. I am confident that my
                [Skill 1] and [Skill 2], as well as my experience in [Industry]
                make me an excellent fit for this position.
              </p>
              <p className="py-1">
                As my attached resume outlines, I have [Number] years of
                experience working in the [Industry] field. I have achieved
                [accomplishment], with [describe results], and I am confident I
                can achieve similar results for [Target Company Name]. I am
                [Quality 1] and [Quality 2], attributes I know are important to
                your organization. I am looking for an opportunity to [outline
                goal], and develop [Skill 3] and [Skill 4], while offering
                expertise in [Skill 5].
              </p>
              <p className="py-1">
                I greatly appreciate you taking the time to consider my
                application. I look forward to the opportunity to speak with you
                further regarding how I can contribute to the continued success
                of [Target Company Name]. Thank you again.
              </p>
              <div className="flex flex-col py-1">

              <span>Regards,</span>
              <span>[First Name] [Last Name]</span>
              <span>[Phone Number]</span>
              <span>[Email Address]</span>
              </div>
            </div>
          </div>
          <div className="px-3 py-1 flex justify-end ">
            <span className="flex gap-1 items-center m-5 bg-[#18da35] px-3 py-2 rounded-lg opacity-80 text-lg text-white hover:opacity-100 hover:cursor-pointer" > <FaFloppyDisk className="text"/> Save & Continue</span>
           
          </div>
        </div>
        {/* Right Container */}
        <div className="w-2/5 ">
        <button className="flex gap-3 items-center mx-5  bg-theme-red px-5 py-2 rounded-lg opacity-80 text-lg text-white hover:opacity-100 hover:cursor-pointer" > <BiSupport className="text"/> AI Assistance</button>
        <div className="m-5">
            <span className="text-2xl font-bold ">PRO TIP:</span>
            <span className="text-xl">Ask AI any question about writing a Cover letter</span>
        </div>


        </div>
      </div>
    </div>
  );
}

export default ToggleButtons;
