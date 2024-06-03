import React, { useState, useEffect } from "react";

import SelectResumeTemplateModal from "./SelectResumeTemplateModal";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../Redux/Slices/resumeSlices";

// const dispatch = useDispatch()
// const [title, setTitle] = useState("")
// const resumedData = useSelector()
const CreateWebsiteModal = ({
  setIsSelectResumeModalOpen,
  setIsCreateWebUrlModalOpen,
}) => {
  // Drop Down funtions

  const [inputValue, setInputValue] = useState("");

  const handleChange = () => {
    if(inputValue){
      Swal.fire({
        icon: "success",
        title: "Congrajulation",
        text: "Website is ready",
      });
      setIsCreateWebUrlModalOpen(false)
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please write your link first",
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
          // onClick={() => setIsTitleModalOpen(false)}
          className={`overlay absolute z-50 top-0 left-0 w-full h-full bg-[#222222a0]`}
        ></div>

        {/* Modal */}
        <div
          className={`w-[50rem] p-[2rem] absolute z-[100] top-[8rem] bg-white modal flex flex-col items-center gap-[2rem] self-center text-black rounded-md`}
        >
          <h2 className="text-[2rem] leading-[2rem] font-medium text-theme-red">
            Create a web address
          </h2>
          <p className="text-[1.3rem] leading-[1.5rem] font-normal text-center px-10">
            This web address can be shared with recruiters, but don’t worry it
            starts out as private so no one can see it.
          </p>

          <div className="border rounded-lg w-[60%] border-theme-red ">
            <label className="p-2 m-1 border border-theme-red rounded-lg text-sm">
              techexport.com/...
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e)=> setInputValue(e.target.value)}
              placeholder=" "
              className="labeled-input h-12 p-2  w-[65%] active: border-theme-red"
            />
          </div>

          <div className="buttons w-full flex-col flex justify-end items-center gap-[1rem]">
            <button
              // onClick={handleCreateClick}
              className="text-[1.3rem] leading-[1.2rem] py-[0.8rem] px-[1rem] w-96  bg-[#18da35] text-white rounded-lg"
            onClick={()=>handleChange()} >
              GENERATE MY SITE
            </button>
            <button
              className="text-[1.3rem] leading-[1.2rem] py-[0.8rem] px-[1rem] w-96 bg-slate-300 text-white rounded-lg"
              onClick={() =>{ setIsSelectResumeModalOpen(true), setIsCreateWebUrlModalOpen(false)}}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWebsiteModal;
