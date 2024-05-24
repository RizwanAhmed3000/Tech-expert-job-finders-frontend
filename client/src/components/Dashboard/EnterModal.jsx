import React from "react";

const EnterModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={`w-full fixed z-50 top-0 left-0 h-dvh flex justify-center ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={() => setIsModalOpen(false)}
        className={`overlay absolute z-50 top-0 left-0  w-full h-full bg-[#222222a0]`}
      ></div>

      {/* Modal */}
      <div
        className={`w-[50rem] p-[2rem] absolute z-[100] top-[8rem] bg-white modal flex flex-col items-center gap-[2rem] self-center text-black rounded-md`}
      >
        <h2 className="text-[2rem] leading-[2rem] font-medium">
          Enter Resume Title
        </h2>
        <p className="text-[1.5rem] leading-[1.5rem] font-normal">
          This name will be use to save your resume.
        </p>

        <input
          type="text"
          name="ResumeTitle"
          id="ResumeTitle"
          placeholder="Enter Resume Title"
          className="w-full px-[1rem] py-[0.5rem] text-[1.5rem] outline-none border-[0.2rem] border-neutral-300"
        />

        <div className="buttons w-full flex justify-end items-center gap-[1rem]">
          <button
            className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[1rem] bg-theme-red text-white rounded-sm"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
          <button className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[1rem] bg-theme-yellow text-white rounded-sm">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterModal;
