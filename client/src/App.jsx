import React from "react";
import TestimonialSection from './components/TestimonialSection'
// Import Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="w-full">
        <Home />
        <TestimonialSection/>
      </div>

      
    </>
  );
};

export default App;
