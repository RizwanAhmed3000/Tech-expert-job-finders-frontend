import React from "react";

// Import Images
import Logo from "../../assets/logo.png";

const DashNavbar = () => {
  return (
    <header className="header w-full bg-black">
      <div className="headerWrapper py-[1rem]">
        {/* Header Left */}
        <div className="headerLeft">
          <div className="logo">
            <img src={Logo} alt="" className="w-[22rem]" />
          </div>
          <div className="toggle"></div>
          <div className="searchBar"></div>
        </div>

        {/* Header Right */}
        <div className="headerRight"></div>
      </div>
    </header>
  );
};

export default DashNavbar;
