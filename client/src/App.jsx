import React from "react";

// Import Pages
import Home from "./pages/Home";
// import Home from "./pages/Home";
import Resume from "./pages/Resume";
import CoverLetter from "./pages/CoverLetter";

const App = () => {
  return (
    <>
      <div className="w-full">
        {/* <Home /> */}
        {/* <Resume /> */}
        <CoverLetter />
      </div>
    </>
  );
};

export default App;
