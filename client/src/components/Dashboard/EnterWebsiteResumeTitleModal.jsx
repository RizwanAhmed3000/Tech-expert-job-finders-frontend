import React, { useState, useEffect } from "react";

import SelectResumeTemplateModal from "./SelectResumeTemplateModal";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../Redux/Slices/resumeSlices";
import CreateWebsiteModal from "./CreateWebsiteModal";



// const dispatch = useDispatch()
// const [title, setTitle] = useState("")
// const resumedData = useSelector()
const EnterWebsiteResumeTitleModal = ({setIsChooseTempModalOpen,setIsSelectResumeModalOpen,setIsCreateWebUrlModalOpen}) => {
 

  // const handleCreateClick = () => {
  //   if (isCreateWebsiteModalOpen) {
  //     // dispatch(resumeSuccess(resumeTitle))
  //     setIsTitleModalOpen(false);
  //     setTimeout(() => {
  //       setIsCreateWebsiteModalOpen(true);
  //     }, 300);
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Please! Select a Resume",
  //     });
  //   }
  // };

  // Drop Down funtions

  const [selectedService, setSelectedService] = useState("");

  const handleChange = () => {
    if(selectedService){
      setIsSelectResumeModalOpen(false)
      setIsCreateWebUrlModalOpen(true)

    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Select Resume First",
      });
    }
   
  };

  return (
    <div>
      <div
        className={`w-full fixed z-50 top-0 left-0 h-dvh flex justify-center `}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsTitleModalOpen(false)}
          className={`overlay absolute z-50 top-0 left-0 w-full h-full bg-[#222222a0]`}
        ></div>

        {/* Modal */}
        <div
          className={`w-[50rem] p-[2rem] absolute z-[100] top-[8rem] bg-white modal flex flex-col items-center gap-[2rem] self-center text-black rounded-md`}
        >
          <h2 className="text-[2rem] leading-[2rem] font-medium text-theme-red">
            Choose a resume
          </h2>
          <p className="text-[1.4rem] leading-[1.5rem] font-normal text-center px-10">
            This resume will be used to make your personal website with its own
            unique web address.
          </p>

          <div className="dropdown  w-[60%] ">
            <select
              id="services"
              name="services"
              className="w-full h-12 rounded-md p-2 border border-theme-red active:border-theme-red"
              onChange={(e)=> setSelectedService(e.target.value)}
            >
              <option value="">Select Resume</option>
              <option value="web-design">Web Design</option>
              <option value="seo">SEO</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <div className="buttons w-full flex-col flex justify-end items-center gap-[1rem]">
            <button
              className="text-[1.3rem] leading-[1.2rem] py-[0.8rem] px-[1rem] w-48  bg-[#18da35] text-white rounded-lg"
            onClick={()=> handleChange()} >
              Continue
            </button>
            <button
              className="text-[1.3rem] leading-[1.2rem] py-[0.8rem] px-[1rem] w-48 bg-slate-300 text-white rounded-lg"
              onClick={() => {setIsChooseTempModalOpen(true), setIsSelectResumeModalOpen(false)}}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterWebsiteResumeTitleModal;
