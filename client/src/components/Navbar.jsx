import React, { useState } from "react";

// Import Image
import Logo from "../assets/logo.png";

// Import React Icon
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <header className="header absolute z-50 top-0 left-0 right-0 bg-theme-black">
      <div className="headerWrapper py-[1.8rem] mx-[3%] flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-[25rem]" />
        </div>

        {/* Navigations */}
        <nav>
          <ul className="flex items-center gap-[2.5rem]">
            {[
              { linkTitle: "Home", LinkURL: "/", badge: false },
              { linkTitle: "Template", LinkURL: "/", badge: false },
              { linkTitle: "Word Template", LinkURL: "/", badge: true },
              { linkTitle: "Order Resume", LinkURL: "/", badge: true },
              { linkTitle: "Job Alert", LinkURL: "/", badge: false },
              { linkTitle: "Login", LinkURL: "/", badge: false },
              { linkTitle: "Sign Up", LinkURL: "/", badge: false },
            ].map(({ linkTitle, linkURL, badge }, index) => (
              <li key={index} className="relative">
                <a
                  href="#"
                  onClick={() =>
                    linkTitle === "Template" &&
                    setIsDropdownOpen(!isDropdownOpen)
                  }
                  className={`text-[1.7rem] leading-[1.5rem] font-normal flex items-center gap-[0.2rem] pt-[1.2rem] pb-[0.8rem] relative z-10 transition-all overflow-hidden ${
                    linkTitle === "Sign Up"
                      ? "signup text-theme-red bg-white leading-[1rem] rounded-md px-[1rem] hover:text-white before:bg-theme-red"
                      : "text-white hover:text-theme-red"
                  }`}
                >
                  {linkTitle}
                  {badge && (
                    <span className="badge text-[1rem] leading-[1rem] text-white bg-red-500 px-[0.2rem] pt-[0.2rem] mb-[0.2rem] flex items-center rounded-sm">
                      Hot
                    </span>
                  )}
                  {linkTitle === "Template" && (
                    <FaChevronDown
                      className={`text-[1.5rem] font-bold mb-[0.5rem] ml-[0.3rem] transition-all ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </a>

                {/* Template Dropdown */}
                {linkTitle === "Template" && isDropdownOpen && (
                  <ul className="min-w-[20rem] absolute top-[5rem] left-[-1rem] bg-white z-[100] flex flex-col py-[1rem] border-theme-red border-t-[0.3rem] shadow-md">
                    {[
                      { linkTitle: "Resume Template", LinkURL: "/" },
                      { linkTitle: "Cover Letter Template", LinkURL: "/" },
                      { linkTitle: "Website Template", LinkURL: "/" },
                      { linkTitle: "Word Template", LinkURL: "/" },
                    ].map(({ linkTitle, linkURL }, index) => (
                      <li key={index} className="relative flex w-full">
                        <a
                          href="#"
                          className="w-full text-[1.6rem] leading-[1.6rem] px-[1rem] py-[1.3rem] transition-all hover:bg-theme-red hover:text-white"
                        >
                          {linkTitle}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
