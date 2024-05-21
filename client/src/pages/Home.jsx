import React from "react";

// Import Component
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Solution from "../components/Solution";
import Templates from "../components/Templates";

const Home = () => {
  return (
    <div className="w-full relative">
      <Navbar />

      <Banner />

      <Solution />

      <Templates />
    </div>
  );
};

export default Home;
