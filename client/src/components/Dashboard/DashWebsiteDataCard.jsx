import React, { useRef, useState } from "react";
import cardImg from "../../assets/website-template/Website-Template.jpg";
import LinearWithValueLabel from "./ProgressBar";
import { FaCloudArrowDown, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { BsPrinter } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
import { IoEyeSharp } from "react-icons/io5";

const DashWebsiteDataCard = ({ cardName }) => {
  const inputRef = useRef(null); // Correctly define inputRef

  const copyToClipboard = () => {
    const inputElement = inputRef.current;
    inputElement.select();
    document.execCommand("copy");
    Swal.fire({
      title: "Copy",
      icon: "success",
      timer: 1000,
    });
  };
  return (
    <div className="px-4 pt-4 max-w-[33%]  bg-white rounded-3xl ">
      {/* Image */}
      <div className="">
        <img src={cardImg} alt="" className="max-w-full" />
      </div>

      {/* Site Link */}

      <div className="container" style={{ margin: "10px" }}>
        <label
          htmlFor="textInput"
          style={{ fontSize: "12px", margin: "3px 0" }}
          className="text-slate-400"
        >
          Site Link
        </label>
        <br />
        <input
          type="text"
          id="textInput"
          placeholder="http//example.com"
          ref={inputRef}
          style={{
            fontSize: "12px",
            margin: "5px 0",
            width: "70%",
            padding: "5px",
          }}
          className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.1rem] rounded-md focus:border-theme-red text-slate-400"
        />
        <button
          onClick={copyToClipboard}
          style={{ fontSize: "16px", margin: "5px 0" }}
          className="px-5 py-1 ms-3 bg-theme-red rounded-lg"
        >
          Copy
        </button>
      </div>
      <div style={{ marginLeft: "10px" }}>
        <label
          htmlFor="textInput"
          style={{ fontSize: "12px", margin: "3px 0" }}
          className="text-slate-400"
        >
          Social Sharing:
        </label>
        <br />
        <div className="flex text-2xl text-theme-red space-x-4 py-5">
          <div className="w-24 h-12 border rounded-full flex justify-center items-center hover:cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="w-24 h-12 border rounded-full flex justify-center items-center hover:cursor-pointer">
            <FaTwitter />
          </div>
          <div className="w-24 h-12 border rounded-full flex justify-center items-center hover:cursor-pointer">
            <IoEyeSharp />
          </div>
          <div className="w-24 h-12 border rounded-full flex justify-center items-center hover:cursor-pointer">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashWebsiteDataCard;
