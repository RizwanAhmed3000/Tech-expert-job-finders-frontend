import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";

const CreateButton = ({ btnText, setIsStartedModalOpen }) => {
  return (
    <div
      onClick={() => setIsStartedModalOpen(true)}
      className="flex w-2/6 h-full m-10 items-center justify-between p-8 bg-white rounded-lg shadow-lg cursor-pointer"
    >
      {btnText =="Create New Website" ? <GiWorld className="text-theme-red text-6xl"/> :
        <BsFillPlusCircleFill className="text-theme-red text-6xl" />}
      <span className="text-2xl"> {btnText}</span>
    </div>
  );
};

export default CreateButton;
