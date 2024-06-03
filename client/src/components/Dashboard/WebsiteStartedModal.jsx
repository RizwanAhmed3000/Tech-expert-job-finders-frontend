import React, { useState, useEffect } from "react";
import cardImg from "../../assets/website-template/Website-Template.jpg";
import SelectResumeTemplateModal from "./SelectResumeTemplateModal";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import SelectWebsiteTemplateModal from "./SelectWebsiteTemplateModal";
import EnterWebsiteResumeTitleModal from "./EnterWebsiteResumeTitleModal";

// const dispatch = useDispatch()
// const [title, setTitle] = useState("")
// const resumedData = useSelector()
const WebsiteStartedModal = ({ setIsChooseTempModalOpen,setIsStartedModalOpen }) => {
  


  const handleCreateClick = () => {
    // dispatch(resumeSuccess(resumeTitle))
    setIsStartedModalOpen(false);
    setTimeout(() => {
      setIsChooseTempModalOpen(true);
    }, 300);
  };

  return (
    <div>
      <div
        className="w-full fixed z-50 top-0 left-0 h-dvh flex justify-center"
      >
        {/* Overlay */}
        <div
          // onClick={() => setIsTitleModalOpen(false)}
          className={`overlay absolute z-50 top-0 left-0 w-full h-full bg-[#222222a0]`}
        ></div>
        {/* Modal */}
        //{" "}
        <div
          className={`w-[35rem]  absolute z-[100] top-[8rem] bg-white modal flex flex-col items-center gap-[2rem] self-center text-black rounded-md`}
        >
          {/* Upper div */}
          <div className="h-72 w-full">
            <img
              src={cardImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          {/* Body Div */}
          <div className="p-3 text-center">
            <h2 className="text-[1.9rem] leading-[2rem] font-medium text-center">
              Take your resume online in just one click!
            </h2>
            <p className="text-[1rem] leading-[1.5rem] font-normal">
              Make your own personal website from one of your resumes. Your site
              will remain private until you decide to make it public.
            </p>

            <div className="buttons w-full flex flex-col justify-center items-center gap-[0.5rem] p-5">
              <button
                onClick={handleCreateClick}
                className="text-[1rem] leading-[1.5rem] py-[0.8rem] px-[2rem] bg-theme-red text-white rounded-md"
              >
                Get Started
              </button>
              <button
                className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[2rem] bg-slate-300 text-white rounded-md"
                onClick={() => setIsStartedModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default WebsiteStartedModal;
