import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";

const CreateButton = ({
  btnText,
  setIsStartedModalOpen,
  setIsTitleModalOpen,
  setIsResumeTitleModalOpen
}) => {
  const handlerChanges = () => {
    // {btnText == "Create New Resume" ?  setIsTitleModalOpen(true) :setIsStartedModalOpen(true);}
    if ((btnText == "Create New Resume")) {
      setIsTitleModalOpen(true);
    } else if ((btnText == "Create New Website")) {
      setIsStartedModalOpen(true);
    }else{
      setIsResumeTitleModalOpen(true)
    }
  };
  return (
    <div
      onClick={() => handlerChanges()}
      className="flex w-2/6 h-full m-10 items-center justify-between p-8 bg-white rounded-lg shadow-lg cursor-pointer"
    >
      {btnText == "Create New Website" ? (
        <GiWorld className="text-theme-red text-6xl" />
      ) : (
        <BsFillPlusCircleFill className="text-theme-red text-6xl" />
      )}
      <span className="text-2xl"> {btnText}</span>
    </div>
  );
};

export default CreateButton;
