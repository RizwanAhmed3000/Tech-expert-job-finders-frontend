import React, { useState } from "react";

// Import Icons
import { RiMenu4Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { MdEmail, MdNotifications } from "react-icons/md";
import { TfiFullscreen } from "react-icons/tfi";
import { FaChevronDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";

// Import Images
import Logo from "../../assets/logo.png";

const DashNavbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header w-full h-[7rem] fixed z-[50] top-0 left-0 flex items-center bg-black">
      <div className="headerWrapper w-full mx-[2%] flex items-center justify-between">
        {/* Header Left */}
        <div className="headerLeft flex items-center gap-[2.5rem]">
          {/* Logo */}
          <div className="logo">
            <img src={Logo} alt="Logo" className="w-[22rem]" />
          </div>

          {/* Toggle Btn */}
          <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="toggleBtn text-theme-red text-[3.4rem] cursor-pointer hover:text-red-400"
          >
            <RiMenu4Fill />
          </div>

          {/* Search Bar */}
          <div className="searchBar flex items-center gap-[0.2rem]">
            <input
              type="text"
              name="Serach"
              id="Search"
              placeholder="Search Here..."
              className="w-[22rem] px-[0.6rem] py-[0.5rem] text-[1.35rem] leading-[1.35rem] outline-none rounded-sm"
            />
            <button
              htmlFor="Search"
              className="bg-theme-red text-white p-[0.7rem] text-[1.6rem] rounded-sm hover:bg-[#ec4943d9] transition-all"
            >
              <FiSearch />
            </button>
          </div>
        </div>

        {/* Header Right */}
        <div className="headerRight flex items-center gap-[2rem]">
          {/* Info Icons */}
          <div className="infoIcons flex items-center gap-[2rem]">
            <MdEmail className="text-[2.5rem] text-white cursor-pointer hover:text-theme-red transition-all" />
            <MdNotifications className="text-[2.5rem] text-white cursor-pointer hover:text-theme-red transition-all" />
            <TfiFullscreen className="text-[1.8rem] text-white cursor-pointer hover:text-theme-red transition-all" />
          </div>

          {/* Account Options */}
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="accountProfile relative flex items-center gap-[1rem] cursor-pointer"
          >
            {/* Profile Image */}
            {/* <img
              src={ProfileAvatar}
              alt="Profile"
              className="w-[2rem] rounded-full"
            /> */}

            {/* Profile Icon */}
            <FaUser
              className={`text-[2.5rem] p-[0.4rem] cursor-pointer transition-all rounded-full ${
                isDropdownOpen
                  ? "bg-theme-red text-white"
                  : "bg-white text-neutral-800"
              }`}
            />

            {/* Profile Name */}
            <span
              className={`${
                isDropdownOpen ? "text-theme-red" : "text-white"
              } text-[1.6rem] font-medium transition-all duration-500`}
            >
              Kamran Jameel
            </span>

            {/* Dropdown Arrow */}
            <span
              className={`text-[1.5rem] font-bold mb-[0.2rem] ml-[0.3rem] transition-all ${
                isDropdownOpen
                  ? "rotate-360 text-theme-red"
                  : "rotate-[270deg] text-white"
              } transition-all duration-500`}
            >
              <FaChevronDown />
            </span>

            {/* Dropdown */}
            {isDropdownOpen && (
              <ul
                onMouseOver={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="min-w-[20rem] absolute top-[3.4rem] left-[0rem] bg-white z-[100] flex flex-col py-[0.5rem] border-theme-red border-t-[0.3rem] shadow-lg"
              >
                {[
                  { LinkIcon: FaUser, linkTitle: "Profile", linkURL: "" },
                  {
                    LinkIcon: FaUserEdit,
                    linkTitle: "Edit Account",
                    linkURL: "",
                  },
                  {
                    LinkIcon: MdEmail,
                    linkTitle: "Messages",
                    linkURL: "",
                  },
                  { LinkIcon: IoMdSettings, linkTitle: "Setting", linkURL: "" },
                  {
                    LinkIcon: IoLockClosed,
                    linkTitle: "Password",
                    LinkURL: "",
                  },
                  { LinkIcon: PiSignOutBold, linkTitle: "Logout", linkURL: "" },
                ].map(({ LinkIcon, linkTitle, linkURL }, index) => (
                  <li key={index} className="relative flex w-full">
                    <a className="w-full flex items-center justify-start gap-[1.5rem] px-[1rem] py-[0.8rem] transition-all text-neutral-800 hover:bg-theme-red hover:text-white">
                      <span
                        className={`${
                          linkTitle === "Profile"
                            ? "text-[1.7rem] leading-[1.7rem]"
                            : "text-[2.1rem] leading-[2.1rem]"
                        } `}
                      >
                        <LinkIcon />
                      </span>
                      <span className="text-[1.5rem] leading-[1.5rem]">
                        {linkTitle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashNavbar;
