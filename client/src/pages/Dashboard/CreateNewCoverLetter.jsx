import React, { useEffect, useState } from "react";
import { FaFloppyDisk } from "react-icons/fa6";
import { GiIciclesFence } from "react-icons/gi";
import { FaRegEdit } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import CoverLetterEditModal, {
  CoverLetterSecondEditor,
} from "../../components/Dashboard/CoverLetterEditModal";
import { FiX } from "react-icons/fi";
import CoverPhoto from "../../components/Dashboard/CreateResumeForms/CoverPhoto";
import { ToggleButton } from "react-bootstrap";

function CoverForm() {
  const [activeButton, setActiveButton] = useState('coverLetter');
  const [isSelectTemplateOpen, setIsSelectTemplateOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [component, SetComponent] = useState(true);

  useEffect(() => {
    if (isSelectTemplateOpen) {
      // Set the initial state for the second modal if the first one is closed
      setIsSecondModalOpen(false);
    }
  }, [isSelectTemplateOpen, isSecondModalOpen]);

  const handleCreateClick = () => {
    // First close the main modal
    setIsSelectTemplateOpen(false);

    // Then, after a short delay, open the second modal
    setTimeout(() => {
      setIsSecondModalOpen(true);
    }); // Adjust the delay as needed
  };

  const handleClick = (button) => {
    setActiveButton(button);
    button == "coverLetter" ? SetComponent(true) : SetComponent(false);
  };

  return (
    <>
      <div className="rounded-lg p-10 m-10 bg-white shadow-lg">
        {/* Header  */}
        <div>
          <span
            className={`text-2xl p-4 cursor-pointer rounded-full bg-theme-red`}
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
        {component ? (
          <div className="flex  h-[50rem] ">
            {/* Left Container */}
            <div className="w-3/5">
              <div className="border borer-slate-400 p-8">
                <div onClick={() => setIsSelectTemplateOpen(true)} className="flex justify-between mb-12 group hover:cursor-pointer hover:border-b-2 border-slate-300">
                  <span></span>
                  <span
                    className="bg-theme-red text-white px-2 py-1 my-3"
                    
                  >
                    Add Recipient Information
                  </span>
                  <button className="invisible group-hover:visible flex items-center gap-1">
                    <FaRegEdit /> Edit
                  </button>
                </div>
                <div onClick={()=> setIsSecondModalOpen(true)} className="flex justify-between mb-5 group hover:cursor-pointer hover:border-b-2 border-slate-300">
                  <span className="bg-theme-red text-white px-2 py-1 my-3">
                    Add Recipient
                  </span>
                  <button className="invisible group-hover:visible flex items-center gap-1">
                    <FaRegEdit /> Edit
                  </button>
                </div>
                <span className=" text-lg ml-2 font-semibold">15/05/2024</span>
                <div className="border border-slate-500 p-3 font-semibold">
                  <h1 className="py-1">Dear [First Name] [Last Name],</h1>
                  <p className="py-1">
                    I am writing today in application to the [Target Job Title]
                    position with [Target Company Name]. I am confident that my
                    [Skill 1] and [Skill 2], as well as my experience in
                    [Industry] make me an excellent fit for this position.
                  </p>
                  <p className="py-1">
                    As my attached resume outlines, I have [Number] years of
                    experience working in the [Industry] field. I have achieved
                    [accomplishment], with [describe results], and I am
                    confident I can achieve similar results for [Target Company
                    Name]. I am [Quality 1] and [Quality 2], attributes I know
                    are important to your organization. I am looking for an
                    opportunity to [outline goal], and develop [Skill 3] and
                    [Skill 4], while offering expertise in [Skill 5].
                  </p>
                  <p className="py-1">
                    I greatly appreciate you taking the time to consider my
                    application. I look forward to the opportunity to speak with
                    you further regarding how I can contribute to the continued
                    success of [Target Company Name]. Thank you again.
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
                <span className="flex gap-1 items-center m-5 bg-[#18da35] px-3 py-2 rounded-lg opacity-80 text-lg text-white hover:opacity-100 hover:cursor-pointer">
                  {" "}
                  <FaFloppyDisk className="text" /> Save & Continue
                </span>
              </div>
            </div>
            {/* Right Container */}
            <div className="w-2/5 ">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex gap-3 items-center mx-5  bg-theme-red px-5 py-2 rounded-lg opacity-80 text-xl text-white hover:opacity-100 hover:cursor-pointer"
              >
                <GiIciclesFence className="text" /> AI Assistance
              </button>
              <div className="m-5">
                <span className="text-2xl font-bold ">PRO TIP: </span>
                <span className="text-xl">
                  Ask AI any question about writing a Cover letter
                </span>
              </div>
              {/* Background Div */}
              <div className="m-5 bg-[#ececfb]  opacity-80 p-5  ">
                <div className="flex flex-col justify-center items-center p-2 ">
                  <h1 className="text-2xl">Here's Your Cover Letter!</h1>
                  <span>What do you want to do next?</span>
                </div>
                <div className="flex flex-col ">
                  <h1 className="font-bold my-2 text-lg">Letter Samples</h1>
                  <input
                    type="text"
                    name="Serach"
                    id="Search"
                    placeholder="Subject"
                    className="  px-[1.5rem] py-[0.5rem] text-[1.35rem] leading-[1.35rem] outline-none rounded-lg border border-slate-300"
                  />
                </div>
                <div className="h-[25.4rem]  overflow-auto scrollbar-light">
                  <button className="w-full p-3 my-3 shadow-lg text-left bg-[#f8f9fa]">
                    Cover Letter: General
                  </button>
                  <button className="w-full p-3 my-3 shadow-lg text-left bg-[#f8f9fa]">
                    Cover Letter: General
                  </button>
                  <button className="w-full p-3 my-3 shadow-lg text-left bg-[#f8f9fa]">
                    Cover Letter: General
                  </button>
                  <button className="w-full p-3 my-3 shadow-lg text-left bg-[#f8f9fa]">
                    Cover Letter: General
                  </button>
                  <button className="w-full p-3 my-3 shadow-lg text-left bg-[#f8f9fa]">
                    Cover Letter: General
                  </button>
                  <button className="w-full p-3 my-3 shadow-lg text-left bg-[#f8f9fa]">
                    Cover Letter: General
                  </button>
                  <button className="w-full p-3 my-3 shadow-lg text-left bg-[#f8f9fa]">
                    Cover Letter: General
                  </button>
                  <button className="w-full p-3 my-3 shadow-lg text-left bg-[#f8f9fa]">
                    Cover Letter: General
                  </button>
                </div>
              </div>
              <button className="flex gap-1 items-center m-5 bg-[#18da35] px-3 py-2 rounded-lg opacity-80 text-lg text-white hover:opacity-100 hover:cursor-pointer">
                {" "}
                <FaFloppyDisk className="text" /> Save & Continue
              </button>
            </div>
          </div>
        ) : (
          <CoverPhoto />
        )}
      </div>
      {/* Personal Data */}
      {isSelectTemplateOpen && component && (
        <div>
          <CoverLetterEditModal
            setIsSelectTemplateOpen={setIsSelectTemplateOpen}
            handleCreateClick={handleCreateClick}
          />
        </div>
      )}
      {/* Employer Data  */}
      {isSecondModalOpen && component && (
        <CoverLetterSecondEditor
          setIsSecondModalOpen={setIsSecondModalOpen}
          handleCreateClick={handleCreateClick}
        />
      )}
      {/* AI Assistance modal show */}
      {isModalOpen && component && (
        <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px] relative">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsModalOpen(false)}
            >
              <FiX className="text-theme-red" size={24} />
            </button>

            <h2 className=" text-2xl font-semibold mb-4 text-theme-red">
              Ask AI for Assistance
            </h2>
            <hr />
            <div className="w-full mt-3">
              <textarea
                className="w-full p-4 text-2xl border border-gray-300 rounded-lg mb-4"
                placeholder="Type your question here..."
                rows="4"
              ></textarea>
              <div className="btnRow w-full flex justify-end">
                <button className="flex gap-1 items-center m-5 bg-[#18da35] px-3 py-2 rounded-lg opacity-80 text-lg text-white hover:opacity-100 hover:cursor-pointer">
                  <IoIosSend />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CoverForm;
