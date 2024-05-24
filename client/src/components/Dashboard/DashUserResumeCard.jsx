import React, { useState } from "react";
import cardImg from "../../assets/templates/cv-template-05.png";
import LinearWithValueLabel from "./ProgressBar";
import { FaCloudArrowDown } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { BsPrinter } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

const DashUserResumeCard = ({ cardName }) => {
  const [progressTop, setProgressTop] = useState("");
  return (
    <div className="p-8 h-2/5 max-w-[40%] flex bg-white m-10 rounded-3xl">
      <div className="w-1/3">
        <img src={cardImg} alt="" className="w-full h-full p-5" />
      </div>
      <div className=" w-2/3 p-8 ">
        <h1 className="text-5xl font-bold">{cardName}</h1>
        <div className="text-3xl flex justify-between py-5">
          <span>score</span>
          <span>{progressTop || 10}%</span>
        </div>
        <div className="py-5  ">
          <LinearWithValueLabel setProgressTop={setProgressTop} />
        </div>
        <div className="text-theme-red flex items-center  justify-around my-5 text-3xl h-48 w-full ">
          <div className="relative  h-full hover:cursor-pointer group ">
            <p className="flex  border border-gray-300 py-3 px-5 rounded-3xl group-hover:underline">
              <MdOutlineEdit />
              Edit
            </p>
            <HoverText hovercontent="Loading.." />
          </div>
          <div className="relative  h-full hover:cursor-pointer group ">
            <FaCloudArrowDown className="text-[4rem] border border-gray-300 py-[0.2rem] px-[1rem]  rounded-full hover:cursor-pointer" />
            <HoverText hovercontent="Processing.." />
          </div>
          <div className="relative  h-full hover:cursor-pointer group">
            <BsPrinter className="text-[4rem] border border-gray-300 py-[0.2rem] px-[1rem]  rounded-full hover:cursor-pointer" />
            <HoverText hovercontent="Processing.." />
          </div>
          <div className="relative  h-full hover:cursor-pointer group">
            <BsThreeDotsVertical className="text-[4rem] border border-gray-300 py-[0.2rem] px-[1rem]  rounded-full hover:cursor-pointer" />
            <HoverText hovercontent="More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashUserResumeCard;

const HoverText = ({ hovercontent }) => {
  return (
    <span className="absolute hidden group-hover:block  translate-x-[-50%] left-[50%] mt-2 p-4 bg-black text-white border rounded shadow-lg ">
      {hovercontent}
    </span>
  );
};
