import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { RiToolsLine } from "react-icons/ri";
import { PiBagFill } from "react-icons/pi";
import { RiNewsLine } from "react-icons/ri";
import { FaComments } from "react-icons/fa6";
import { Link } from "react-router-dom";
import person from "../../assets/person.png";

const DashSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const menus = [
    { name: "Dashboard", link: "/", Icon: MdOutlineDashboard },
    { name: "My Resume", link: "/", Icon: IoDocument },
    { name: "My Cover Letter", link: "/", Icon: IoDocument },
    { name: "Website", link: "/", Icon: BiWorld, margin: true },
    { name: "Template", link: "/", Icon: FiShoppingCart },
    { name: "Tools", link: "/", Icon: RiToolsLine },
    { name: "Job Alert", link: "/", Icon: PiBagFill, margin: true },
    { name: "Blog", link: "/", Icon: RiNewsLine },
    { name: "Feedback", link: "/", Icon: FaComments },
  ];

  return (
    <div
      onMouseOver={() => setIsSidebarOpen(true)}
      className={`bg-white ${
        isSidebarOpen ? "w-[18%]" : "w-[10%]"
      } duration-500 text-theme-red fixed top-0 left-0 max-h-dvh pt-[7rem] pb-[4rem] scrollbar-light overflow-auto`}
    >
      <div
        className={`flex items-center ${
          !isSidebarOpen ? "flex-col" : ""
        } px-10 pt-5 justify-start`}
      >
        <img
          src={person}
          className=" h-[5rem] rounded-full border p-2 object-cover"
          alt="user"
        />
        <p className="text-2xl px-4">Salik Sheikh</p>
      </div>
      <div className="mt-4 flex flex-col relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`group flex items-center text-2xl border-t px-10 py-7 border-neutral-300 gap-3.5 font-medium hover:bg-theme-red hover:text-white transition-all duration-500 ${
              isSidebarOpen ? "items-center" : "justify-center flex-col"
            }`}
          >
            {React.createElement(menu?.Icon, { size: "24" })}
            <h2
              className={`whitespace-pre duration-100 ${
                isSidebarOpen ? "ml-3" : "mt-2 text-center"
              }`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashSidebar;
