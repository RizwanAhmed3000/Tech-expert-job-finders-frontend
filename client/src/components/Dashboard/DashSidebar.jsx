
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import {  FiShoppingCart } from "react-icons/fi";
import { RiToolsLine } from "react-icons/ri";
import { PiBagFill } from "react-icons/pi";
import { RiNewsLine } from "react-icons/ri";
import { FaComments } from "react-icons/fa6";
import { Link } from "react-router-dom";
import person from "../../assets/person.png"

const DashSidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "My Resume", link: "/", icon: IoDocument },
    { name: "My Cover Letter", link: "/", icon: IoDocument },
    { name: "Website", link: "/", icon: BiWorld, margin: true },
    { name: "Template", link: "/", icon: FiShoppingCart },
    { name: "Tools", link: "/", icon: RiToolsLine },
    { name: "Job Alert", link: "/", icon: PiBagFill, margin: true },
    { name: "Blog", link: "/", icon: RiNewsLine },
    { name: "Feedback", link: "/", icon: FaComments },
  ];
  const [open, setOpen] = useState(false);

  return (
      <div
      onMouseOver={()=> setOpen(true)}
        className={`bg-white ${open ? "w-[25rem]" : "w-[16rem]"} duration-500  text-theme-red h-dvh scrollbar-light  overflow-auto`}
      >
        <div className={`flex  items-center ${!open  ? "flex-col" : ""}   justify-center`} >
     
        <img src={person} className=" h-[5rem]  rounded-full border p-2 object-cover" alt="kdsfesfksd" />
          <p className="text-2xl px-4">Salik Sheikh</p>
      
        
        
        </div>
        <div className="mt-4 flex flex-col relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${
                menu?.margin ? "" : ""
              } group flex items-center text-2xl border-t px-20 py-7 border-theme-red gap-3.5 font-medium hover:bg-theme-red hover:text-white transition-all duration-500 ${
                open ? "" : "justify-center flex-col"
              }`}
            >
              {React.createElement(menu?.icon, { size: "24" })}
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  open ? "ml-3" : "mt-2 text-center"
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
